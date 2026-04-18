import { expect, Locator, Page } from "@playwright/test";
import { LessonPlanGeneratorPage } from './lessonPlanGenerator.page';

export class MenuPage {
  readonly page: Page;
  readonly menuPanel: Locator;
  readonly lnkRoute: Locator;
  readonly lnkTryTurbopack: Locator;
  readonly lnkRouteInfo: Locator;
  readonly lnkPreferences: Locator;
  readonly btnHideDevTools: Locator;
  readonly ddlTheme: Locator;
  readonly ddlSize: Locator;
  readonly ddlPosition: Locator;

  readonly routeInfoPanelHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    this.menuPanel = page.locator('#panel-route');

    this.lnkRoute = page.locator('span:text-is("Route")');
    this.lnkTryTurbopack = page.locator('span:has-text("Try Turbopack")');
    this.lnkRouteInfo = page.locator('span:has-text("Route Info")');
    this.lnkPreferences = page.locator('span:has-text("Preferences")');
    this.btnHideDevTools = page.locator('button:has-text("Hide Dev Tools"), span:has-text("Hide Dev Tools")');

    this.ddlTheme = page.locator('select#theme');
    this.ddlSize = page.locator('select#size');
    this.ddlPosition = page.locator('select#position');
    this.routeInfoPanelHeader = page.locator('h3').filter({ hasText: 'Route Info' });
  }

  /**
   * Checks if the menu panel is visible
   */
  async isMenuVisible() {
    await expect(this.menuPanel).toBeVisible();
  }

  /**
   * Checks if the menu panel is hidden
   */
  async isMenuHidden() {
    await expect(this.menuPanel).toBeHidden();
  }

  /**
   * Opens the preferences panel
   */
  async openPreferences() {
    await this.lnkPreferences.click();
    await this.page.locator('h3').filter({ hasText: 'Preferences' }).waitFor({ state: 'visible' });
  }

  /**
   * Selects a theme for the menu panel
   * @param theme The theme to select
   */
  async selectTheme(theme: string) {
    const possibleThemes = ['Light', 'Dark', 'System'];
    if (possibleThemes.includes(theme)) {
      await this.ddlTheme.selectOption(theme);
    } else {
      throw new Error(`Invalid theme: ${theme}`);
    }
  }

  /**
   * Selects a size for the menu panel
   * @param size The size to select
   */
  async selectSize(size: string) {
    const possibleSizes = ['Small', 'Medium', 'Large'];
    if (possibleSizes.includes(size)) {
      await this.ddlSize.selectOption(size);
    } else {
      throw new Error(`Invalid size: ${size}`);
    }
  }

  /**
   * Selects a position for the menu panel
   * @param position The position to select
   */
  async selectPosition(position: string) {
    const possiblePositions = ['Bottom Right', 'Bottom Left', 'Top Right', 'Top Left'];
    if (possiblePositions.includes(position)) {
      await this.ddlPosition.selectOption(position);
    } else {
      throw new Error(`Invalid position: ${position}`);
    }
  }
}