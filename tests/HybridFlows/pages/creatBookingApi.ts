import apiClient from "../../utils/apiUtils";
import { Contact } from "../../utils/pageUtils";

/**
 * Login user to get authentication token
 * @param email - User's email for login
 * @param password - User's password for login
 * @returns data.token - Bearer token for authentication
 */
export async function loginUser(email: string, password: string) {
  const res = await apiClient.post("/users/login", { email, password });
  return res.data.token;
}

/**
 * Add a new contact via API
 * @param token - Bearer token for authentication
 * @param contact - Contact details to be added
 * @returns data - Response data from the API after adding the contact
 */
export async function addContact(token: string, contact: Contact) {
  const res = await apiClient.post("/contacts", contact, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
