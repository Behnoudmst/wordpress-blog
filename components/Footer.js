import { FaLinkedin, FaInstagram, FaCodepen } from "react-icons/fa";

const icons = { color: "#808b99", fontSize: "30" };
const Yer = new Date().getFullYear();

export default function Footer() {
  return (
    <section className="bottom-section">
      <footer>
        <div>
          <h2>About Me</h2>
          <p>
            I have started designing websites because I needed one to showcase
            my photography. Then my friends wanted one for their photography and
            eventually I became a web designer. I constantly try to learn
            cutting edge technologies and update my knoweledge.
          </p>
        </div>

        <div>
          <h2>Hire Me</h2>
          <p>
            I offer all the services related to web-design and developement. If
            you have a website, I can help you improve the UX, load speed, SEO
            and more. Let's discuss!
          </p>
        </div>
        <div>
          <h2>About This Website</h2>
          <p>
            This website is created as a front-end to my wordpress website. I
            used NextJs to create this and wordpress is used as a headless cms.
            This is the best solution to speed-up WordPress websites.
          </p>
        </div>
      </footer>
      <div className="credit">
        <hr></hr>
        <div className="footer-buttom">
          <p>© {Yer} All rights reserved by Behnoud Mostafaie.</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/behnoudmst/"><FaLinkedin  style={icons}/></a>
             <a href="https://www.instagram.com/behnoud.mst/"><FaInstagram style={icons} /></a>
             <a href="https://codepen.io/Benmst/"><FaCodepen style={icons} /></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
