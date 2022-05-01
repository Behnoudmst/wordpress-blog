import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

export default function Comments(props) {
  const [result, setResult] = useState("");

  const { data: session } = useSession();

  function handlecm(event) {
    event.preventDefault();
    if (event.target.validation.value === "7") {
    axios
      .post("api/handlecomment", {
        postName: props.postName,
        name: session.user.name,
        profilePic: session.user.image,
        comment: event.target.commentbox.value,
      })
      .then(function (response) {
      
        if (response.status === 200) {
         setResult(<div><p className="text-teal-700 font-bold"> 🥰 Thank you! we have recieved your idea! </p></div>);
        }
      }); 
    } else { setResult(<div><p className="text-red-700 font-bold "> 🤔 Your answer to security question seems to be wrong!</p></div>) }
  }

  if (session) {
    return (
      <div className="rounded-xl shadow md:p-10 p-4 md:w-2/4 md:mx-auto m-4">
        
        <div className="flex justify-between mb-6">
          <div className="flex items-center ">
        <img className="rounded-full mr-3" src={session.user.image} width={70} height={70} />
        <span>  Signed in as <br /><b> {session.user.name}</b> </span>
          </div>
          <button className=" btn text-black " onClick={() => signOut()}>
            Sign out
          </button>
        </div>
        <form method="POST" onSubmit={handlecm}>
          <label className="font-semibold " htmlFor="commentbox">
            Write your idea:
          </label>
          <textarea
            name="commentbox"
            required
            className="w-full my-2 p-4 shadow rounded"
            type="text-area"
            placeholder="write your iadeas here ..."
          />
           <label className="font-semibold " htmlFor="validation">
            Please answer security question with a number:
          </label> <br/>
          <input className="w-1/2 mt-2 p-4 rounded border-0" required  name="validation" type="number" placeholder="five plus two equals?" /> <br/>
          <button className="btn">Submit</button>
          {result}
        
        </form>
      </div>
    );
  } else {
    return (
      <div className="mx-auto mb-24 w-max">
        <a className="btn " onClick={() => signIn()}>
          Please Sign in to post an idea
        </a>
      </div>
    );
  }
}
