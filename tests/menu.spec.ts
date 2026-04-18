import { test, expect } from '@playwright/test';
import { MenuPage } from './PageObjects/menu.page';
import { LessonPlanGeneratorPage } from './PageObjects/lessonPlanGenerator.page';

test.describe('Menu Features - Full Regression Suite', () => {
  let menuPage: MenuPage;
  let lessonPage: LessonPlanGeneratorPage

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    lessonPage = new LessonPlanGeneratorPage(page);
    lessonPage.btnMenu.waitFor({ state: 'attached', timeout: 5000 });
    await lessonPage.toggleMenu();
    menuPage = new MenuPage(page);
  });

  test('Should validate available options in menu', async ({ page }) => {
    await expect(menuPage.lnkRoute).toBeVisible();
    await expect(menuPage.lnkTryTurbopack).toBeVisible();
    await expect(menuPage.lnkRouteInfo).toBeVisible();
    await expect(menuPage.lnkPreferences).toBeVisible();
  });

  // Known bug: Theme changes are made only in the panel (Bug 0003)
  test('Should validate Theme changes are applied to the entire site when selecting different options', async ({ page }) => {
    await menuPage.openPreferences();
    const htmlLoc = page.locator('html');

    await menuPage.selectTheme('Dark');
    expect(
      await htmlLoc.evaluate(el => el.classList.contains('dark') || window.getComputedStyle(el).colorScheme === 'dark')
    ).toBeTruthy();

    await menuPage.selectTheme('Light');
    expect(
      await htmlLoc.evaluate(el => el.classList.contains('light') || window.getComputedStyle(el).colorScheme === 'light' || window.getComputedStyle(el).colorScheme === 'normal')
    ).toBeTruthy();

    await menuPage.selectTheme('System');
    expect(
      await htmlLoc.evaluate(el => !el.classList.contains('light') && !el.classList.contains('dark'))
    ).toBeTruthy();
  });

  // Known bug: Size changes are made only in the panel content, not panel size (Bug 0004)
  test('Should validate panel dimensions are updated when selecting different Size options', async () => {
    await menuPage.openPreferences();

    // Set to small first
    await menuPage.selectSize('Small');
    const smallBox = await menuPage.menuPanel.boundingBox();

    // Change to large and expect size to grow
    await menuPage.selectSize('Large');
    const largeBox = await menuPage.menuPanel.boundingBox();

    if (smallBox && largeBox) {
      expect(largeBox.width).toBeGreaterThan(smallBox.width);
      expect(largeBox.height).toBeGreaterThan(smallBox.height);
    }
  });

  test('Should validate menu button and panel are repositioned when different Position options are selected', async ({ page }) => {
    await menuPage.openPreferences();

    const viewport = page.viewportSize();
    if (!viewport) return;

    await menuPage.selectPosition('Bottom Left')
    let btnBox = await lessonPage.btnMenu.boundingBox();
    expect(btnBox?.x).toBeLessThan(viewport.width / 2);
    expect(btnBox?.y).toBeGreaterThan(viewport.height / 2);

    await menuPage.selectPosition('Top Right')
    btnBox = await lessonPage.btnMenu.boundingBox();
    expect(btnBox?.x).toBeGreaterThan(viewport.width / 2);
    expect(btnBox?.y).toBeLessThan(viewport.height / 2);

    await menuPage.selectPosition('Top Left')
    btnBox = await lessonPage.btnMenu.boundingBox();
    expect(btnBox?.x).toBeLessThan(viewport.width / 2);
    expect(btnBox?.y).toBeLessThan(viewport.height / 2);

    await menuPage.selectPosition('Bottom Right')
  });

  test('Should validate the dev tools are permanently hidden for the session when Hide Dev Tools is clicked', async ({ page }) => {
    await menuPage.btnHideDevTools.waitFor({ state: 'visible' });
    await menuPage.btnHideDevTools.click();

    await expect(menuPage.menuPanel).toBeHidden();
    await expect(lessonPage.btnMenu).toBeHidden();
  });

  // Known bug: Menu is not completely closed when clicking outside suboption (Bug 0005)
  test('Should validate the entire menu is closed when clicking completely outside the panel bounds', async ({ page }) => {
    await menuPage.lnkRoute.click();
    await page.mouse.click(0, 0);
    await menuPage.isMenuHidden();
  });
});
