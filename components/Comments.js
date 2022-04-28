import axios from 'axios'
import { useSession, signIn, signOut } from "next-auth/react"

 


export default function Comments(props) {
    const { data: session } = useSession();
    
    function handlecm (event) {
        event.preventDefault();
        axios.post('api/handlecomment', {
            postName: props.postName,
            name: session.user.name,
            comment: event.target.commentbox.value

        })
    }

  

if (session) {
    return (
        <div className="rounded shadow p-10 md:w-2/4 mx-auto mb-12">
   
        <div className="flex justify-between items-center">
            Signed in as {session.user.email} <br />
        <button className=" btn text-black " onClick={() => signOut()}>Sign out</button>
        </div>
        <form method="POST" onSubmit={handlecm}>
            <label className="font-semibold " htmlfor="commentbox">Write your idea:</label>
            <textarea name="commentbox" required className="w-full mt-2 p-4 shadow rounded" type="text-area" placeholder="write your iadeas here ..."/>
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