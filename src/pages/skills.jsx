import React from 'react';
import SkillBox from '../components/skills_box';

const Skills = () => {
  const skillsetp = [
    {
      name: "Python",
      image: "/images/pngwing.com (2).png"
    },
    {
      name: "C++",
      image: "/images/pngwing.com.png"
    },
  ];
  
  const skilldb = [
    {
      name: "Express.js",
      image: "images/express-js.png"
    },
    {
      name: "MySQL",
      image: "images/images.png"
    },
    {
      name: "MongoDB",
      image: "images/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
    },
  ];
  
  const skillfront = [
    {
      name: "HTML",
      image: "/images/HTML5_logo_and_wordmark.svg.png"
    },
    {
      name: "CSS",
      image: "images/CSS3_logo_and_wordmark.svg"
    },
    {
      name: "JavaScript",
      image: "/images/pngegg.png"
    },
    {
      name: "React.js",
      image: "images/imagesrea.png"
    }
  ];

  return (
    <div className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      
      <div>
        <h2 className="category-heading">Programming <span>Languages</span></h2>
      </div>

      <div className="skill-container">
        {skillsetp.map((item, index) => (
          <div key={index}>
            <SkillBox program={item} />
          </div>
        ))}
      </div>

      <div>
        <h2 className="category-heading">Front <span>End</span></h2>
      </div>

      <div className="skill-container">
        {skillfront.map((item, index) => (
          <div key={index}>
            <SkillBox program={item} />
          </div>
        ))}
      </div>

      <div>
        <h2 className="category-heading">Database & <span>Backend</span></h2>
      </div>

      <div className="skill-container">
        {skilldb.map((item, index) => (
          <div key={index}>
            <SkillBox program={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
