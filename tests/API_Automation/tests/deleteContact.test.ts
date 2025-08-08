import { test, expect } from "@jest/globals";
import apiClient from "../../utils/apiUtils";

test("Delete a contact", async () => {
  const loginRes = await apiClient.post("/users/login", {
    email: "api_user_76305@example.com",
    password: "sdet1234",
  });
  const token = loginRes.data.token;

  const contact = {
    firstName: "Delete",
    lastName: "Me",
    birthdate: "1990-08-10",
    email: "deleteme@fake.com",
    phone: "6666666666",
    street1: "4 Delete St",
    street2: "",
    city: "DeleteCity",
    stateProvince: "TX",
    postalCode: "99999",
    country: "USA",
  };

  const create = await apiClient.post("/contacts", contact, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const contactId = create.data._id;

  const deleteRes = await apiClient.delete(`/contacts/${contactId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  expect(deleteRes.status).toBe(200);
});
