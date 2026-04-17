import { expect, Locator, Page } from "@playwright/test";

export class LessonPlanGeneratorPage {
  readonly page: Page;
  readonly btnMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnMenu = page.locator('button#next-logo')
  }
}