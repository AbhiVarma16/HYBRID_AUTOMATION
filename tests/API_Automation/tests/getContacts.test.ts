import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";

test("Get all contacts after login", async () => {
  const loginResponse = await apiClient.post("/users/login", {
    email: "bulk_contacts@example.com",
    password: "sdet1234",
  });
  expect(loginResponse.status).toBe(200);
  const token = loginResponse.data.token;

  const response = await apiClient.get("/contacts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
});
