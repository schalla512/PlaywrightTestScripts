import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("navigate to url", async () => {
    await page.goto("https://github.com/login");
  });

  await test.step("enter user name and password", async () => {
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("testerstalk");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("test123");
  });

  await test.step("click on signin", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("validate error msg", async () => {
    await expect(page.getByRole("alert")).toContainText(
      "Incorrect usrname or password.",
    );
  });
});
