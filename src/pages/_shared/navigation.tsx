import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}

export default function Navigation({ children }: Props) {
  const { data: session } = useSession();

  const linkStyles = "mr-4 px-4 py-2 text-white";

  const LandingPageItem = (
    <div>
      <Link className="text-2xl font-bold text-white" href="/">
        Envelope
      </Link>
    </div>
  );

  const LoginItem = !session?.user ? (
    <div>
      <Link className={linkStyles} href="/login">
        Login
      </Link>
    </div>
  ) : null;

  const AccountItem = session?.user ? (
    <div>
      <Link className={linkStyles} href="/dashboard">
        Account
      </Link>
    </div>
  ) : null;

  return (
    <div>
      <nav className="flex items-center justify-between pb-8">
        {LandingPageItem}
        {LoginItem}
        {AccountItem}
        {children ? children : null}
      </nav>
    </div>
  );
}
