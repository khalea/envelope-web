import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  console.log(session?.user ? session.user : "No session");
  console.log(session ? session : "No session");

  const signOutAction = () => {
    signOut({ callbackUrl: "/" })
      .then((value) => console.log(value))
      .catch((error) => console.log(error));
  };

  const signInAction = () => {
    signIn("google", { callbackUrl: "/dashboard" })
      .then((value) => console.log(value))
      .catch((error) => console.log(error));
  };

  const BasicSignedIn = (
    <>
      Signed in as {session?.user.email} <br />
      <button onClick={signOutAction}>Sign out</button>
      <div>
        <h1>Welcome, {session?.user.name}</h1>
      </div>
    </>
  );

  const BasicSignedOut = (
    <>
      Not signed in <br />
      <button onClick={signInAction}>Sign in</button>
    </>
  );

  if (session && session.user) {
    return BasicSignedIn;
  }
  return BasicSignedOut;
}
