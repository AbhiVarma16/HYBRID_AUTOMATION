import { test, expect, beforeEach, afterEach } from "@jest/globals";
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

test("Logout user via API", async () => {
  const logoutRes = await apiClient.post(
    "/users/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  expect(logoutRes.status).toBe(200);
});
