import "../assets/styles/certifications.css";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link: string;
};

const Certifications = () => {
  const certs: Certification[] = [
    { 
      title: "Advanced React Developer", 
      issuer: "Meta", 
      date: "2025", 
      link: "https://www.coursera.org/account/accomplishments/certificate/react-advanced" 
    },
    { 
      title: "Programming with JavaScript", 
      issuer: "Meta", 
      date: "2025", 
      link: "https://www.coursera.org/account/accomplishments/certificate/js-meta" 
    },
    { 
      title: "Introduction to Frontend Development", 
      issuer: "Meta", 
      date: "2025", 
      link: "https://www.coursera.org/account/accomplishments/certificate/frontend-intro" 
    },
  ];

  return (
    <div className="certifications-page">
      <h1 className="page-title">Certifications</h1>

      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div key={index} className={`cert-card flip-card animate-${index + 1}`}>
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
