import { test, expect } from '@playwright/test';
import { LessonPlanGeneratorPage } from './PageObjects/lessonPlanGenerator.page';

test.describe('Lesson Plan Generator - Acceptance Criteria Regression Suite', () => {
  let lessonPage: LessonPlanGeneratorPage;

  test.beforeEach(async ({ page }) => {
    lessonPage = new LessonPlanGeneratorPage(page);
    await lessonPage.goto();
  });

  test('Should validate screen completeness', async () => {
    await expect(lessonPage.page).toHaveTitle('Nisa — Lesson Plan Generator');

    await expect(lessonPage.lblHeader).toBeVisible()
    await expect(lessonPage.lblHeader).toHaveText('Lesson Plan Generator');
    await expect(lessonPage.lblSubHeader).toBeVisible();
    await expect(lessonPage.lblSubHeader).toHaveText('Enter a topic to generate a structured lesson plan');

    await expect(lessonPage.lblNoMessagesYet).toBeVisible();
    await expect(lessonPage.lblPlaceholder).toBeVisible();

    await expect(lessonPage.btnMenu).toBeVisible();
    await expect(lessonPage.txtTopic).toBeVisible();
    await expect(lessonPage.btnSubmit).toBeVisible();

  });

  test('Should validate lesson is generated and verify correct user/assistant message order', async () => {
    const topic = 'photosynthesis';
    await expect(lessonPage.lblNoMessagesYet).toBeVisible();
    await lessonPage.submitLesson(topic);

    const allMessages = lessonPage.page.locator('.max-w-\\[80\\%\\]');
    await expect(allMessages.nth(0)).toContainText(topic);

    await expect(lessonPage.generatingIndicator).toBeVisible();
    await expect(lessonPage.generatingIndicator).toBeHidden({ timeout: 15000 });
    await expect(lessonPage.assistantMessageBubbles.last()).toContainText(`Lesson Plan: ${topic}`);
  });

  // Known bug: User is able to submit another topic while a lesson is being generated (Bug 0009) 
  test('Should verify Submit button and Input field are disable while lesson is generated', async () => {
    await lessonPage.submitLesson('History');

    await expect(lessonPage.generatingIndicator).toBeVisible();
    await expect(lessonPage.txtTopic).toBeDisabled();
    await expect(lessonPage.btnSubmit).toBeDisabled();

    await expect(lessonPage.generatingIndicator).toBeHidden({ timeout: 30000 });
    await expect(lessonPage.txtTopic).toBeEnabled();
    await expect(lessonPage.btnSubmit).toBeEnabled();
  });

  // Known bug: User is always taken to the bottom of the screen while lesson is generated (Bug 0008)
  test('Should validate user is able to scroll freely during generation without forcing scroll to bottom', async ({ page }) => {
    await lessonPage.submitLesson('Biology');
    await expect(lessonPage.assistantMessageBubbles.last()).toBeVisible();

    await lessonPage.messageListContainer.hover();
    await page.mouse.wheel(0, -500);

    await expect(lessonPage.assistantMessageBubbles.last()).toContainText('Overview', { timeout: 10000 });

    const scrollTop = await lessonPage.messageListContainer.evaluate((node) => node.scrollTop);
    const scrollHeight = await lessonPage.messageListContainer.evaluate((node) => node.scrollHeight);
    const clientHeight = await lessonPage.messageListContainer.evaluate((node) => node.clientHeight);

    expect(scrollTop + clientHeight).toBeLessThan(scrollHeight - 10);
  });

  // Known bug: No clear message is displayed on an error. "Generating..." remains (Bug 0011)
  test('Should validate a clear user-friendly error message is displayed when an API request fails', async () => {
    await lessonPage.submitLesson('ERROR');
    await expect(lessonPage.generatingIndicator).toBeHidden();

    const errorMsg = lessonPage.page.getByText(/error|failed|something went wrong/i);
    await expect(errorMsg).toBeVisible();
  });

  // Known bug: Form accepts empty space to submit (Bug 0007)
  test('Should validate form submission is prevented when the input consists only of spacing characters', async () => {
    await lessonPage.submitLesson('   ');

    // The request should be blocked entirely, state should remain empty
    await expect(lessonPage.lblNoMessagesYet).toBeVisible();
  });

  // Known bug: Same lessons are being generated when user inserts different topics (Bug 0010)
  test('Should validate distinctly unique lesson plan content is generated for different topics', async () => {
    await lessonPage.submitLesson('Maths');
    await expect(lessonPage.generatingIndicator).toBeHidden({ timeout: 15000 });
    const contentOne = await lessonPage.assistantMessageBubbles.last().innerText();

    await lessonPage.submitLesson('History');
    await expect(lessonPage.generatingIndicator).toBeHidden({ timeout: 15000 });
    const contentTwo = await lessonPage.assistantMessageBubbles.last().innerText();

    expect(contentOne).not.toBe(contentTwo);
  });

  // Known bug: Text is displayed in two lines on some resolutions (Bug 0006)
  test('Should validate top introductory description text is rendered gracefully on a single line', async () => {
    const textLocator = lessonPage.page.getByText(/Enter a topic below to generate your first lesson plan/i);
    await expect(textLocator).toBeVisible();

    const box = await textLocator.boundingBox();
    if (box) {
      expect(box.height).toBeLessThan(35);
    }
  });
});
