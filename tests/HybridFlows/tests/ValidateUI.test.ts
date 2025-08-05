import {
  Contact,
  navigateToPageAndLogin,
  validateContactInUI,
} from "../../utils/pageUtils";
import { loginUser, addContact } from "../pages/creatBookingApi";
import { test, expect } from "@playwright/test";

test("add contact via API and see in UI", async ({ page }) => {
  let token: string;
  let contact: Contact;
  const email = "HybridTesting@fake.com";
  const password = "testing";

  await test.step("Login to site", async () => {
    token = await loginUser(email, password);
    expect(token).toBeDefined();
    console.log("Token: ", token);
  });

  await test.step("Add contact using API", async () => {
    contact = {
      firstName: "Abhishek",
      lastName: "SDET" + Date.now(),
      birthdate: "1990-01-01",
      email: "abhishek@example.com",
      phone: "9999999999",
      street1: "123 Main St",
      city: "Mumbai",
      stateProvince: "MH",
      postalCode: "400001",
      country: "India",
    };

    await addContact(token, contact);
  });

  await test.step("Login to UI", async () => {
    await navigateToPageAndLogin(page, email, password);
  });
  
  // wantedly failing this step
  await test.step("Verify contact in UI table", async () => {
    await validateContactInUI(page, contact);
  });
});
