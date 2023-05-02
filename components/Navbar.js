import Link from "next/link"
import { useSession, signOut, signIn } from "next-auth/react"

export default function Navbar() {

  const { data: session } = useSession();

    return (
      <>
          <nav className="bg-black md:flex flex-wrap items-center justify-items-stretch text-white justify-between md:px-14 basis1/3 gap-2 p-3">
              <Link href="/" passHref ><h1 className=" cursor-pointer text-lg">Behnoud Mostafaie</h1></Link>
              <div className="flex gap-6 justify-around text-right">
                  <Link  href="/" passHref ><p className="text-white cursor-pointer">Home</p></Link>  
                  {session ? <><p className="italic">{session.user.name}</p><span onClick={signOut} className="cursor-pointer text-white">Sign out</span> </> : <span className="cursor-pointer text-white" onClick={signIn}>Sign in</span> }     
              </div>
          </nav>
      </>
    )
}



