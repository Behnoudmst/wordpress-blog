import { FaLinkedin, FaInstagram, FaCodepen } from "react-icons/fa";

const icons = { color: "#808b99", fontSize: "30" };
const Yer = new Date().getFullYear();

export default function Footer() {
  return (
    <section className="bg-black text-white p-6 ">
      <footer className="md:flex md:gap-8 flex-auto p-8">
        <div>
          <h2 className="text-2xl ">About Me</h2>
          <p>
            I have started designing websites because I needed one to showcase
            my photography. Then my friends wanted one for their photography and
            eventually I became a web designer. I constantly try to learn
            cutting edge technologies and update my knoweledge.
          </p>
        </div>

        <div>
          <h2 className="text-2xl ">Hire Me</h2>
          <p>
            I offer all the services related to web-design and developement. If
            you have a website, I can help you improve the UX, load speed, SEO
            and more. Contact me to discuss!
          </p>
        </div>
        <div>
          <h2 className="text-2xl ">About This Website</h2>
          <p>
            This website is created as a front-end to my wordpress website. I
            used NextJs to create this and wordpress is used as a headless cms.
            This is the best solution to speed-up WordPress websites.
          </p>
        </div>
      </footer>
      <div className="p-10">
        <hr></hr>
        <div className="text-center py-2">
          <p>© {Yer} All rights reserved by Behnoud Mostafaie.</p>
          <div className="flex mx-auto w-max py-4 gap-3">
            <a href="https://www.linkedin.com/in/behnoudmst/"><FaLinkedin  style={icons}/></a>
             <a href="https://www.instagram.com/behnoud.mst/"><FaInstagram style={icons} /></a>
             <a href="https://codepen.io/Benmst/"><FaCodepen style={icons} /></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
