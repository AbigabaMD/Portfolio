import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"; 
import "../assets/styles/footer.css"; // adjust path as needed

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        
        {/* Branding */}
        <div className="footer-brand">
          <p>Contact me Here</p>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:yourmail@example.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Marvin Abigaba. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
