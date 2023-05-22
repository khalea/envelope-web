import { useSession, signIn, signOut } from "next-auth/react";
import SignUpForm from "./_components/signup-form";
import Navigation from "../_shared/navigation";
import { useState } from "react";

export default function Login() {
  const { data: session } = useSession();

  const [hasAccount, toggleHasAccount] = useState<boolean>(true);

  console.log(session?.user ? session.user : "No session");
  console.log(session ? session : "No session");

  const pageStyle = "flex flex-col min-h-screen px-16 py-8 bg-slate-400";

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

  const SignInComponent = (
    <>
      <button onClick={signInAction}>Sign in</button>
      <button onClick={() => toggleHasAccount(false)}>
        Don't have an account? Sign up.
      </button>
    </>
  );

  const SignUpComponent = (
    <>
      <SignUpForm />
      <button onClick={() => toggleHasAccount(true)}>
        Already have an account? Sign in.
      </button>
    </>
  );

  const UserSignedIn = (
    <>
      <h1>Welcome, {session?.user.name}</h1>
      <p>You are already signed in.</p>
    </>
  );

  if (session && session.user) {
    return UserSignedIn;
  }
  return (
    <div className={pageStyle}>
      <Navigation></Navigation>
      {hasAccount ? SignInComponent : SignUpComponent}
    </div>
  );
}
