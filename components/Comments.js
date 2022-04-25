import { useSession, signIn, signOut } from "next-auth/react"




export default function Comments() {
    const { data: session } = useSession();

if (session) {
    return (
        <div className="rounded shadow p-10 md:w-2/4 mx-auto mb-12">
   
        <div className="flex justify-between items-center">
            Signed in as {session.user.email} <br />
        <button className=" btn text-black " onClick={() => signOut()}>Sign out</button>
        </div>
        <form>
            <label className="font-semibold " for="commentbox">Write your idea:</label>
            <textarea name="commentbox" className="w-full mt-2 p-4 shadow rounded" type="text-area" placeholder="write your iadeas here ..."/>
            <button className="btn">Submit</button>


        </form>

    </div>          
    )
  } else {
      return (
          <div className="mx-auto my-14 w-max">
          <a className="btn " onClick={() => signIn() } >Please Sign in to post a comment</a>
          </div>
      )
  }
}