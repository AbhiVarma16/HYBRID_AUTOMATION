import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";
import axios from "axios";

test("Delete contact with invalid token should fail", async () => {
  const fakeContactId = "123456789012345678901234";

  try {
    await apiClient.delete(`/contacts/${fakeContactId}`, {
      headers: {
        Authorization: "Bearer wrongtoken",
      },
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response?.status).toBe(401);
      expect(error.response.data.error).toContain("Please authenticate");
    } else {
      throw error;
    }
  }
});
