import  { useState } from "react";
import "../assets/styles/technologies.css";

const About = () => {
  const techs = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Python", logo: "https://www.python.org/static/community_logos/python-logo.png" },
    { name: "Django", logo: "https://static.djangoproject.com/img/logos/django-logo-negative.svg" },
    { name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
    { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
    { name: "AWS", logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" },
  ];

  const scrollingTechs = [...techs, ...techs]; // duplicate for smooth loop
  const [paused, setPaused] = useState(false);

  return (
    <section id="about" className="container pt-6 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="title">About Me</h2>
        <p className="text-sm font-light text-[#fff] para mb-12">
          I am a full-stack Software Engineer with 3+ years of experience building scalable web and mobile applications. Strong expertise in React, React Native, and TypeScript with proven backend experience using Python (Django, DRF) and relational databases (PostgreSQL, MySQL). Skilled in API design, containerization (Docker), and CI/CD pipelines (GitHub Actions, AWS). Adept at working in agile environments, delivering production-ready solutions, and collaborating across cross-functional teams.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technologies I Use</h3>
        
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className={`flex gap-6 whitespace-nowrap animate-marquee ${paused ? "paused" : ""}`}>
            {scrollingTechs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 p-2 bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-md"
              >
                <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain mb-1" />
                <span className="text-xs font-semibold text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
