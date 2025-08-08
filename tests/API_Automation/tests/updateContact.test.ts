import { test, expect, afterEach, beforeEach } from "@jest/globals";
import apiClient from "../../utils/apiUtils";

let token: string;
let createdContactId: string | null = null;

beforeEach(async () => {
  // Login before each test
  const loginRes = await apiClient.post("/users/login", {
    email: "api_user@example.com",
    password: "sdet1234",
  });

  token = loginRes.data.token;
});

afterEach(async () => {
  // Cleanup: Delete contact if created
  if (createdContactId) {
    try {
      await apiClient.delete("/contacts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`Deleted test contact: ${createdContactId}`);
    } catch (error) {
      console.error(`Failed to delete contact: ${createdContactId}`, error);
    } finally {
      createdContactId = null;
    }
  }
});

test("Update an existing contact", async () => {
  const contact = {
    firstName: "Temp",
    lastName: "Update",
    birthdate: "1985-06-15",
    email: "temp.update@fake.com",
    phone: "9888777666",
    street1: "3rd Street",
    street2: "Block C",
    city: "TempCity",
    stateProvince: "NY",
    postalCode: "11111",
    country: "USA",
  };

  const created = await apiClient.post("/contacts", contact, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const contactId = created.data._id;

  const updatedData = { ...contact, phone: "7777777777" };

  const updateRes = await apiClient.put(`/contacts/${contactId}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  expect(updateRes.status).toBe(200);
  expect(updateRes.data.phone).toBe("7777777777");
});
