import { FaLinkedin, FaInstagram, FaCodepen } from "react-icons/fa";
import Link from "next/link";
const icons = { color: "#808b99", fontSize: "30" };
const Yer = new Date().getFullYear();

export default function Footer() {
  return (
    <section className="bg-black text-white md:p-8 p-8 lg:px-48 ">
      <footer className="md:flex md:gap-8 flex-1 ">
        <div className="flex-1">
          <h2 className="text-2xl ">About Me</h2>
          <p>
          Are you looking for a web designer who can help you create a stunning online presence for your business? I am a professional web designer and developer with 7 years of experience creating custom websites that not only look great but also drive results for businesses of all sizes.
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl ">Get in touch</h2>
          <p>
          Don&apos;t wait to take your online presence to the next level. Contact me today to schedule a consultation and learn more about my custom web design services. Let me help you create a website that looks great, performs even better, and drives results for your business.
          </p>
          <Link href="mailto:behnoud.mostafaie@gmail.com" passHref>
              <div className="cursor-pointer  py-1 mb-4 rounded-lg bg-gray-600  text-white  hover:outline hover:outline-1  w-40 text-center ">
                Send me a message
              </div>
            </Link>
        </div>
      </footer>
      <div >
        <hr></hr>
        <div className="text-center py-2">
          <p>© {Yer} All rights reserved by Behnoud Mostafaie.</p>
          <div className="flex mx-auto w-max py-4 gap-3">
            <a aria-label="LinkedIn icon link" href="https://www.linkedin.com/in/behnoudmst/"><FaLinkedin  style={icons}/></a>
             <a aria-label="Instagram icon link" href="https://www.instagram.com/behnoud.mst/"><FaInstagram  style={icons} /></a>
             <a aria-label="CodePen icon link" href="https://codepen.io/Benmst/"><FaCodepen  style={icons} /></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
