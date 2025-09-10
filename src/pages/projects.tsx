import { useRef, useEffect, useState } from "react";
import "../assets/styles/project.css";
import farmsellApp from "../assets/farmsell2.png";
import farmsellWeb from "../assets/farmsell1.png";
import fullnessApp from "../assets/fullness2.png";
import eliteWeb from "../assets/elite.png";

type SitesItem = {
  src: string;
  name: string;
  description: string;
  link: string;
};

const Projects = () => {
  const sites: SitesItem[] = [
    {
      src: farmsellApp,
      name: "Farmsell App",
      description: "Mobile app for agricultural sales and inventory tracking.",
      link: "https://play.google.com/store/apps/details?id=com.farmsell",
    },
    {
      src: farmsellWeb,
      name: "Farmsell Web",
      description: "Responsive web platform for farmers to sell produce.",
      link: "https://farmsell.com",
    },
    {
      src: fullnessApp,
      name: "Fullness App",
      description: "Health & nutrition tracking app for balanced diets.",
      link: "https://fullnessapp.com",
    },

    {
        src:eliteWeb,
        name:"Elite",
        description:"A modern e-commerce platform for fashion enthusiasts.",
        link:"https://elitefixers.com"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 1;

    const scroll = () => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, [isPaused]);

  return (
    <div id="projects" className="py-10 containe">
      <div className="flex justify-center mb-8">
        <h1 className="projects-title">Projects I have Contributed On</h1>
      </div>

      <div
        ref={scrollRef}
        className="projects-scroll"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {sites.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src={item.src} alt={item.name} />
            <div className="project-overlay">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm mt-1">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
