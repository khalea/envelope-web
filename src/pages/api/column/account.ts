import { type NextApiRequest, type NextApiResponse } from "next";
import axios from "axios";
import { authOptions } from "~/server/auth";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    switch (req.url) {
      case (req.url = "/api/column/account"):
        const accountInfoResponse = await getBankAccountInfo();
        res.status(200);
        res.json(accountInfoResponse?.data);
        break;
    }
  } else {
    switch (req.url) {
      case (req.url = "api/column/account?getID"):
        console.log("TODO");
      // TODO const getAccountIDResponse = await getAccountID();
      default:
        res.send({
          error:
            "You must be signed in to view the protected content on this page.",
        });
    }
  }
}

/*
async function getEntityInfo(entityID: string) {
  const options = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.column.com/entities/",
    headers: {
      Authorization: process.env.COLUMN_AUTH,
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}
*/

async function getBankAccountInfo() {
  const testBankId = process.env.COLUMN_TEST_BANK_ACCOUNT_ID
    ? process.env.COLUMN_TEST_BANK_ACCOUNT_ID
    : "";
  const options = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.column.com/bank-accounts/${testBankId}`,
    headers: {
      Authorization: process.env.COLUMN_AUTH,
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/* TODO
async function getAccountID() {
  throw new Error("Function not implemented.");
}
*/
