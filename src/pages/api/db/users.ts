import { AccountKey, Prisma, User } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";
import { type NextApiRequest, type NextApiResponse } from "next";

/* Error Handling Reference*/

/* Handle incoming requests */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    message: `Successfully hit the users endpoint! ${String(req.url)}`,
  });
  switch (req.url) {
    case (req.url = "/api/db/users?login"):
      console.log("Reached nested endpoint");
      console.log(req.body);
      attemptToLogin(req.body.email, req.body.password).catch((reason) => {
        console.log(reason);
      });
  }
}

export async function attemptToLogin(email: string, password: string) {
  const userExists: User | undefined = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
    },
  });
  console.log(userExists);

  if (userExists) {
    const accountKeyCorrect = await prisma.accountKey.findFirst({
      where: {
        userId: userExists.id,
        password: password,
      },
    });
    console.log(accountKeyCorrect);
  }
}

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
