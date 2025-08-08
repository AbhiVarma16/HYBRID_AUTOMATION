import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";
import axios from "axios";

test("Add contact without token should fail", async () => {
  const contact = {
    firstName: "Hacker",
    lastName: "McNoToken",
    email: "unauth@fake.com",
    birthdate: "2000-01-01",
    phone: "1234567890",
    street1: "1 Fake St",
    street2: "",
    city: "Nowhere",
    stateProvince: "NA",
    postalCode: "00000",
    country: "Noland",
  };

  try {
    await apiClient.post("/contacts", contact);
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response?.status).toBe(401);
      expect(error.response.data.error).toContain("Please authenticate.");
    } else {
      throw error;
    }
  }
});
