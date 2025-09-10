import { useRef, useEffect, useState } from "react";
import '../assets/styles/project.css'; // Import the CSS
import farmsellApp from '../assets/farmsell2.png';
import farmsellWeb from '../assets/farmsell1.png';
import fullnessApp from '../assets/fullness2.png';

type SitesItem = {
  src: string;
  name: string;
};

const Projects = () => {
  const sites: SitesItem[] = [
    { src: farmsellApp, name: "Farmsell App" },
    { src: farmsellWeb, name: "Farmsell Web" },
    { src: fullnessApp, name: "Fullness Web" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 1; // pixels per frame

    const scroll = () => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // reset for seamless scroll
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, [isPaused]);

  return (
    <div className="containe">
      {/* Page Title */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-light">Projects Contributed On</h1>
      </div>

      {/* Scrollable Image Gallery */}
      <div
        ref={scrollRef}
        className="projects-scroll"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Original items */}
        {sites.map((item, index) => (
          <div key={index} className="project-item">
            <img src={item.src} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default Projects;
