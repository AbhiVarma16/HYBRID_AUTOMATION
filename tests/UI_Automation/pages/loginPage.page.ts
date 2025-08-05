import { Page, expect } from "@playwright/test";
import { selectors } from "../selectors/selectors";
import { Contact } from "../../utils/pageUtils";

/**
 * Clicks the "Add Contact" button to open the contact form.
 * @param page - Playwright page object
 */
export async function addContactToList(page: Page, contact: Contact) {
  await page.locator(selectors.addContact).click();
  await page.locator(selectors.firstName).fill(contact.firstName);
  await page.locator(selectors.lastName).fill(contact.lastName);
  await page.locator(selectors.birthDateID).fill(contact.birthdate);
  await page.locator(selectors.emailInput).fill(contact.email);
  await page.locator(selectors.phoneInput).fill(contact.phone);
  await page.locator(selectors.address).fill(contact.street1);
  await page.locator(selectors.cityInput).fill(contact.city);
  await page.locator(selectors.stateProvince).fill(contact.stateProvince);
  await page.locator(selectors.postalCodeInput).fill(contact.postalCode);
  await page.locator(selectors.countryName).fill(contact.country);
  await page.locator(selectors.submitButton).click();
  await page.locator(selectors.contactListTable).waitFor();
}

/**
 * Validates the contact details displayed in view-only mode.
 * @param page - Playwright page object
 * @param contact - Contact data to be validated
 */
export async function validateAddedContactDetails(page: Page, contact: Contact) {
  await page.locator(selectors.contactListTable).waitFor();
  const fullName = `${contact.firstName} ${contact.lastName}`;
  const contactRow = page.locator('tr.contactTableBodyRow', {
    hasText: fullName,
  });
  await contactRow.click();
  await expect(page.locator(selectors.firstName)).toHaveText(contact.firstName);
  await expect(page.locator(selectors.lastName)).toHaveText(contact.lastName);
  await expect(page.locator(selectors.birthDateID)).toHaveText(contact.birthdate);
  await expect(page.locator(selectors.phoneInput)).toHaveText(contact.phone);
  await expect(page.locator(selectors.address)).toHaveText(contact.street1);
  await expect(page.locator(selectors.cityInput)).toHaveText(contact.city);
  await expect(page.locator(selectors.stateProvince)).toHaveText(contact.stateProvince);
  await expect(page.locator(selectors.postalCodeInput)).toHaveText(contact.postalCode);
  await expect(page.locator(selectors.countryName)).toHaveText(contact.country);
}
