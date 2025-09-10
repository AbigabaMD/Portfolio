import "../assets/styles/hero.css";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero-container flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 py-12 px-4 max-w-6xl mx-auto">

      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-md">
        <h1 className="font-thin text-[#144473] text-[36px] mb-4">
          Software Developer
        </h1>

        <p className="">
          Building modern, scalable, and user-friendly <br />
          applications with passion and precision.<br /><br /><br />
        </p>

        <div className="flex gap-6">
          
          <button className="glass-btn"
          onClick={() => window.open('/Portfolio/resume.pdf', '_blank')}
          >View My Resume</button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="hero-image w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0">
        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

export default Hero;