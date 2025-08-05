import test from "@playwright/test";
import fs from "fs";
import path from "path";
import { Contact, navigateToPageAndLogin } from "../../utils/pageUtils";
import { generateFakeContact } from "../../testData/generateFakeContact";
import {
  addContactToList,
  validateAddedContactDetails,
} from "../pages/loginPage.page";

const contacts: Contact[] = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "../../testData/contacts.json"),
    "utf-8"
  )
);

test.describe("Add and Validate Contacts from JSON", () => {
  const email = "HybridTesting@fake.com";
  const password = "testing";

  contacts.forEach((contact) => {
    test(`Add and validate contact: ${contact.firstName} ${contact.lastName}`, async ({
      page,
    }) => {
      const contact = generateFakeContact();
      await navigateToPageAndLogin(page, email, password);
      await addContactToList(page, contact);
      await validateAddedContactDetails(page, contact);
    });
  });
});


