import test from "@playwright/test";
import { Contact, navigateToPageAndLogin } from "../../utils/pageUtils";
import {
  addContactToList,
  validateAddedContactDetails,
} from "../pages/loginPage.page";

test("Validate Add Contact", async ({ page }) => {
  const email = "HybridTesting@fake.com";
  const password = "testing";
  const contact: Contact = {
    firstName: "John",
    lastName: "Doe" + Date.now().toString().slice(-4),
    birthdate: "1990-01-01",
    email: "",
    phone: "1234567890",
    street1: "123 Main St",
    city: "Springfield",
    stateProvince: "IL",
    postalCode: "62701",
    country: "USA",
  };

  await test.step("Navigate to login page And Login", async () => {
    await navigateToPageAndLogin(page, email, password);
  });

  await test.step("Add and Validate Contact", async () => {
    await addContactToList(page, contact);
    await validateAddedContactDetails(page, contact);
  });
});
