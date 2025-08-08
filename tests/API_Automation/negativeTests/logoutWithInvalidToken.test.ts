import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";
import axios from "axios";

test("Logout with invalid token should fail", async () => {
  try {
    await apiClient.post(
      "/users/logout",
      {},
      {
        headers: {
          Authorization: "Bearer faketoken123456",
        },
      }
    );
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response?.status).toBe(401);
      expect(error.response.data.error).toContain("Please authenticate");
    } else {
      throw error;
    }
  }
});
