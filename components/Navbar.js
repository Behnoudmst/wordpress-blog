import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  const { data: session } = useSession();
  function showSettings(event) {
    event.preventDefault();
  }
  return (
    <>
      <nav className="bg-black fixed w-full z-10 text-white gap-2 p-3">
        <Link href="/" passHref>
          <h1 className=" cursor-pointer inline-block text-lg">Behnoud Mostafaie</h1>
        </Link>
        <div >
          <Menu right={true} width={300}>
            {session ? (
              <>
                <p className="italic bm-item">welcome {session.user.name}!</p>
                <p onClick={signOut} className="hover:underline cursor-pointer bm-item text-white">
                  Sign out
                </p>{" "}
              </>
            ) : (
              <p className="hover:underline bm-item cursor-pointer text-white" onClick={signIn}>
                Sign in
              </p>
            )}
            <Link href="/" passHref>
              <p className="text-white cursor-pointer bm-item hover:underline">Home</p>
            </Link>
          </Menu>
        </div>
      </nav>
    </>
  );
}
