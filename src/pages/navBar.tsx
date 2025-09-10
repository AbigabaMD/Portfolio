import { useState, useEffect } from "react";
import "../App.css";
import ServiceRequestForm from "@/Forms/serviceRequest";
import Modal from "@/Modals/modal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`glass-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">Abigaba Marvin Dan</div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* Let's Connect Button */}
        <button className="glass-btn" onClick={() => setIsModalOpen(true)}>
          Let's Connect
        </button>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        />
      </nav>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ServiceRequestForm />
      </Modal>
    </>
  );
};

export default Navbar;
