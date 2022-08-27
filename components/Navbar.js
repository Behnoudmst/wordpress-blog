import Link from "next/link"


export default function Navbar() {
  
    return (
      <>
          <nav className="bg-black md:flex flex-wrap items-center justify-items-stretch text-white justify-between md:px-14 basis1/3 gap-2 p-3">
              <Link href="/" passHref ><h1 className="text-center cursor-pointer">Behnoud Mostafaie</h1></Link>
              <div className="flex gap-6 justify-around text-center">
                  <Link href="/">Home</Link>        
              </div>
          </nav>
      </>
    )
}



