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
    { src: fullnessApp, name: "Fullness App" },
  ];

  return (
    <div className="py-10">
      {/* Page Title */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-light">Projects Page</h1>
      </div>

      {/* Image Gallery */}
      <div className="flex justify-start gap-6 flex-nowrap overflow-x-auto px-4">
        {sites.map((item, index) => (
          <div key={index} className="flex flex-col items-center min-w-[96px]">
            <img
              src={item.src}
              alt={item.name}
              className="w-24 h-24 object-contain rounded-lg shadow-lg"
            />
            <span className="mt-2 font-medium text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
