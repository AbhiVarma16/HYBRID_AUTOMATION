import { test, expect, afterEach, beforeEach } from "@jest/globals";
import apiClient from "../../utils/apiUtils";

let token: string;
let createdContactId: string | null = null;

beforeEach(async () => {
  // Login before each test
  const loginRes = await apiClient.post("/users/login", {
    email: "HybridTesting@fake.com",
    password: "testing",
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

test("Create contact via API", async () => {
  const contact = {
    firstName: "John",
    lastName: "Doe",
    birthdate: "1970-01-01",
    email: "jdoe@fake.com",
    phone: "8005555555",
    street1: "1 Main St.",
    street2: "Apartment A",
    city: "Anytown",
    stateProvince: "KS",
    postalCode: "12345",
    country: "USA",
  };

  console.log("Token: ", token);
  const addContactRespone = await apiClient.post("/contacts", contact, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  expect(addContactRespone.status).toBe(201);
});
