import { Prisma } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";

/* Error Handling Reference*/

// TODO rewrite and reference https://column.com/docs/api/#entity/object
export async function createEntity() {
  const newEntity = {
    email: "test@env.com", // unique
    username: "test", // unique
    password: "abc123",
    first_name: "Jane",
    middle_name: undefined,
    last_name: "Doe",
    address_line1: "50 Main Street",
    address_line2: undefined,
    city: "San Francisco",
    state: "California",
    country: "USA",
    zip_code: "94102",
    phone_number: "012-375-8763",
    ssn: "ahdfjhl",
  };

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Creating new entity...");
  } catch (error) {
    console.error(error);
  }
}
