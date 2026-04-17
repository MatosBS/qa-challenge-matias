import { test, expect } from '@playwright/test';
import { MenuPage } from './PageObjects/menu.page';
import { LessonPlanGeneratorPage } from './PageObjects/lessonPlanGenerator.page';
import { describe } from 'node:test';

describe('Menu', () => {
  test('Probando', async ({ page }) => {
    await page.goto('/');

    const lessonPlanGeneratorPage = new LessonPlanGeneratorPage(page);
    await lessonPlanGeneratorPage.btnMenu.click();
    const menuPage = new MenuPage(page);
    await menuPage.probando();
  });
});
