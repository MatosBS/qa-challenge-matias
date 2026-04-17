import { expect, Locator, Page } from "@playwright/test";

export class MenuPage {
  readonly page: Page;
  readonly lnkRoute: Locator;
  readonly lnkTryTurbopack: Locator;
  readonly lnkRouteInfo: Locator;

  constructor(page: Page) {
    this.page = page;
    // Descarta "Route Info" automáticamente
    this.lnkRoute = page.locator('#panel-route span:text-is("Route")');
    this.lnkTryTurbopack = page.locator('#panel-route span:has-text("Try Turbopack")');
    this.lnkRouteInfo = page.locator('#panel-route span:has-text("Route Info")');
  }

  async probando() {
    await expect(this.lnkRoute).toBeVisible();
    await expect(this.lnkTryTurbopack).toBeVisible();
    await expect(this.lnkRouteInfo).toBeVisible();
  }
}