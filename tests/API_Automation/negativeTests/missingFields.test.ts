import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";
import axios from "axios";

test("Add contact with missing required fields should fail", async () => {
  const login = await apiClient.post("/users/login", {
    email: "HybridTesting@fake.com",
    password: "testing",
  });

  const token = login.data.token;

  const incompleteContact = {
    // firstName missing
    lastName: "NoFirstName",
    email: "invalid@fake.com",
  };

  try {
    await apiClient.post("/contacts", incompleteContact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response?.status).toBe(400);
      expect(error.response.data.errors.firstName.message).toBe(
        "Path `firstName` is required."
      );
    } else {
      throw error;
    }
  }
});
