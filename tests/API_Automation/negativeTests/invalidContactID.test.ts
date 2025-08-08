import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";
import axios from "axios";

test("Get contact with invalid ID should return 404", async () => {
  const login = await apiClient.post("/users/login", {
    email: "api_user@example.com",
    password: "sdet1234",
  });

  const token = login.data.token;
  const fakeId = "123456789012345678901234"; // valid format but not found

  try {
    await apiClient.get(`/contacts/${fakeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response?.status).toBe(404);
    } else {
      throw error;
    }
  }
});
