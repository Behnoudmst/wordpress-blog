import Link from "next/link"


export default function Navbar() {
  
    return (
      <>
          <nav className="bg-black flex flex-wrap items-center justify-items-stretch text-white justify-between md:px-14 basis1/3 gap-2 p-3">
              <h1>Behnoud Mostafaie</h1>
              <ul className="flex gap-6">
                  <Link href="/">Home</Link> 
                  <Link href="photography">My Photography</Link>               
              </ul>
          </nav>
      </>
    )
}



