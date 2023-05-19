import { type NextPage } from "next";
import Head from "next/head";
import { type AccountInfo } from "./types";
import { useEffect, useState } from "react";

import axios from "axios";
import useSWR from "swr";
import { signOut, useSession } from "next-auth/react";

const fetcher = (url: string) =>
  axios.get(url).then((res) => res.data as AccountInfo);

const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  const { data, error, isLoading, isValidating, mutate } = useSWR<
    AccountInfo,
    Error
  >("/api/column/account", fetcher);

  const [accountInfo, setAccountInfo] = useState<AccountInfo>();

  const signOutAction = () => {
    signOut({ callbackUrl: "/" })
      .then((value) => console.log(value))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setAccountInfo(data as AccountInfo);
  }, [data]);

  const BasicSignedIn = session ? (
    <>
      Signed in as {session?.user.email} <br />
      <button onClick={signOutAction}>Sign out</button>
      <div>
        <h1>Welcome, {session?.user.name}</h1>
      </div>
    </>
  ) : null;

  const basicAccountInfo =
    session && accountInfo ? (
      <section>
        <h1>{accountInfo.type.toLowerCase()}</h1>
        <h1>${accountInfo.balances.available_amount.toLocaleString()}</h1>
      </section>
    ) : null;

  if (session && session.user) {
    return (
      <>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard · Envelope" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="h-screen w-screen bg-slate-500 p-16 text-white">
          <h1 className="text-2xl font-bold ">Testing Account</h1>
          <section className="">{basicAccountInfo}</section>
          {BasicSignedIn}
        </main>
      </>
    );
  } else {
    return (
      <>
        <section>
          <h1>Not signed in</h1>
        </section>
      </>
    );
  }
};

export default Dashboard;
