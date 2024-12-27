import React from 'react'
import SkillBox from '../components/skills_box'

const Skills = () => {
  const skillsetp=[
    {
      name:"Python",
      image:"/images/pngwing.com (2).png"
    },
    {
      name:"C++",
      image:"/images/pngwing.com.png"
    },
    {
      name:"Java Script",
      image:"/images/pngegg.png"
    }
  ]
  return (
      <div className="skills" id="skills">
         
         <h2 className='heading'>My <span>Skills</span></h2>
         <div className='skill-container'>

          {skillsetp.map((item, index) => (
            <div key={index} className="">
              {/* <img src={item.image} alt="" /> */}
              <SkillBox program={item}/>
              {/* <ProductCard products={item} /> */}
            </div>
          ))}
          </div>
        </div>
      // <div class="services" id="services">
      //    <h2 class="heading">My <span>Skills</span></h2>
      //       <div class="services-container">
      //             <SkillBox/>
      //     </div>

    // </div>
  )
}

export default Skills