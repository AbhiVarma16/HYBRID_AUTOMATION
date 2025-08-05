import { Page, expect } from "@playwright/test";
import { selectors } from "../UI_Automation/selectors/selectors";
import { BaseURL } from "../../config";

/**
 * Contact interface representing the structure of a contact object
 */
export interface Contact {
  firstName: string;
  lastName: string;
  birthdate: string;
  email: string;
  phone: string;
  street1: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
}

/**
 * Navigate to the contact list page and login
 * @param page - Playwright page object
 * @param email - User's email for login
 * @param password - User's password for login
 */

export async function navigateToPageAndLogin(
  page: Page,
  email: string,
  password: string
) {
  await page.goto(BaseURL);
  await page.fill(selectors.emailInput, email);
  await page.fill(selectors.passwordInput, password);
  await page.click(selectors.submitButton);
}

/**
 * Validate that the contact is displayed in the UI table
 * @param page - Playwright page object
 * @param contact - Contact details to validate
 */
export async function validateContactInUI(page: Page, contact: Contact) {
  const fullName = `${contact.firstName} ${contact.lastName}`;
  const contactRow = page.locator('tr.contactTableBodyRow', {
    hasText: fullName,
  });
await expect(contactRow).toContainText(fullName);

}
