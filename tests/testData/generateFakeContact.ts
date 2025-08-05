import { faker } from "@faker-js/faker";

export function generateFakeContact() {
  const firstName = faker.person.firstName();
  const lastName = `${faker.person.lastName()}_${Date.now()
    .toString()
    .slice(0, 6)}`;

  const email = faker.internet.email({ firstName, lastName });
  const phone = faker.phone.number({ style: "national" });
  const birthdate = faker.date
    .birthdate({ min: 18, max: 65, mode: "age" })
    .toISOString()
    .split("T")[0];

  return {
    firstName,
    lastName,
    birthdate,
    email,
    phone,
    street1: faker.location.streetAddress(),
    city: faker.location.city(),
    stateProvince: faker.location.state({ abbreviated: true }),
    postalCode: faker.location.zipCode(),
    country: "USA",
  };
}
