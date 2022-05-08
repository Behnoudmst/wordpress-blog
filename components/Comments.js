import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
// **********CSS import ******
import "react-toastify/dist/ReactToastify.css";

// ********* Default export fcn ***********
export default function Comments(props) {
  const { data: session } = useSession();

  // *****************handle comments by posting to api endpoint *************
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
            toast.success("I have recieved your Idea, Thanks! 🥰");
            event.target.commentbox.value = '';
            event.target.validation.value=''
          }
        });
    } else {
      toast.error("It seems you made a mistake with security question! 🤔");
    }
  }
  // *******************Check to see if user is logged in or not and display comment form *************
  if (session) {
    return (
      <div className="rounded-xl shadow md:p-10 p-4 md:w-2/4 md:mx-auto m-4">
        <ToastContainer position="top-center" />
        <div className="flex justify-between mb-6">
          <div className="flex items-center ">
            <Image
              className="rounded-full"
              src={session.user.image}
              width={70}
              height={70}
              alt={session.user.name}
            />
            <span className="ml-3" >
              
              Signed in as <br />
              <b> {session.user.name}</b>
            </span>
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
          </label>{" "}
          <br />
          <input
            className="w-1/2 mt-2 p-4 rounded border-0"
            required
            name="validation"
            type="number"
            placeholder="five plus two equals?"
          />{" "}
          <br />
          <button className="btn">Submit</button>
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
