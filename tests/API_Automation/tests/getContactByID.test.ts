import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";

test("Get a contact by ID", async () => {
  const loginRes = await apiClient.post("/users/login", {
    email: "api_user_69625@example.com",
    password: "sdet1234",
  });
  const token = loginRes.data.token;

  const contact = {
    firstName: "Jane",
    lastName: "Smith",
    birthdate: "1980-05-10",
    email: "jane.smith@fake.com",
    phone: "9001234567",
    street1: "2 Main St",
    street2: "Unit B",
    city: "Othertown",
    stateProvince: "CA",
    postalCode: "54321",
    country: "USA",
  };

  const createRes = await apiClient.post("/contacts", contact, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const contactId = createRes.data._id;

  const getRes = await apiClient.get(`/contacts/${contactId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  expect(getRes.status).toBe(200);
  expect(getRes.data.firstName).toBe(contact.firstName);
});
