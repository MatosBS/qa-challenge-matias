import { expect, Locator, Page } from "@playwright/test";

export class LessonPlanGeneratorPage {
  readonly page: Page;

  readonly lblHeader: Locator;
  readonly lblSubHeader: Locator;

  readonly btnMenu: Locator;

  readonly txtTopic: Locator;
  readonly btnSubmit: Locator;

  readonly lblNoMessagesYet: Locator;
  readonly lblPlaceholder: Locator;
  readonly generatingIndicator: Locator;
  readonly userMessageBubbles: Locator;
  readonly assistantMessageBubbles: Locator;
  readonly messageListContainer: Locator;

  constructor(page: Page) {
    this.page = page;

    this.lblHeader = page.locator('header h1');
    this.lblSubHeader = page.locator('header p');

    this.lblNoMessagesYet = page.getByText('No messages yet');
    this.lblPlaceholder = page.getByText('Enter a topic below to generate your first lesson plan.');

    this.btnMenu = page.locator('button#next-logo');

    this.txtTopic = page.getByPlaceholder(/Enter a lesson plan topic/i);
    this.btnSubmit = page.locator('button[type="submit"]');
    this.generatingIndicator = page.getByText(/Generating lesson plan/i);
    this.messageListContainer = page.locator('.overflow-y-auto');

    // Using classes to differentiate user and assistant bubbles based on chat.tsx definition
    // User message has 'bg-blue-600 text-white', Assistant has 'bg-white border'
    this.userMessageBubbles = page.locator('.bg-blue-600.text-white.rounded-tr-sm');
    this.assistantMessageBubbles = page.locator('.bg-white.border-gray-200.text-gray-800.rounded-tl-sm');
  }

  /**
   * Navigates to the lesson plan generator page
   */
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Submits a lesson plan topic
   * @param topic The topic to submit
   */
  async submitLesson(topic: string) {
    await this.txtTopic.fill(topic);
    await this.btnSubmit.click();
  }

  /**
   * Toggles the menu
   */
  async toggleMenu() {
    await this.btnMenu.waitFor({ state: 'attached' });
    await this.btnMenu.click();
  }
}