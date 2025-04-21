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
  ]
  const skilldb=[
    {
      name:"Express.js",
      image:"images/express-js.png"
    },
    {
      name:"MySQL",
      image:"images/images.png"
    },
    {
      name:"MongoDB",
      image:"images/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
    }, 

  ]
  const skillfront=[
    {
      name:"HTML",
      image:"/images/HTML5_logo_and_wordmark.svg.png"
    },
    {
      name:"CSS",
      image:"images/CSS3_logo_and_wordmark.svg"
    },
    {
      name:"Java Script",
      image:"/images/pngegg.png"
    },
    {
      name:"React Js",
      image:"images/imagesrea.png"
    }
  ]
  return (
      <div className="skills" id="skills">
      

         <h2 className='heading'>My <span>Skills</span></h2>
        
         <div>
         <h2 className="heading1 text-center text-4xl font-bold mb-2">
         Programming <span className="text-violet-500"> Languages</span>
      </h2>
          
         </div>

         <div className='skill-container'>
          {skillsetp.map((item, index) => (
          
            <div key={index} className="skc">
              {/* <img src={item.image} alt="" /> */}
              <SkillBox program={item}/>
              {/* <ProductCard products={item} /> */}
      
            </div>
          ))}
          </div>

          
          <h2 className="heading1 text-center text-4xl font-bold mb-2">
          Front <span className="text-violet-500">end</span>
      </h2>
  
         <div className='skill-container'>
          {skillfront.map((item, index) => (
            <div key={index} className="">
              {/* <img src={item.image} alt="" /> */}
              <SkillBox program={item}/>
              {/* <ProductCard products={item} /> */}
            </div>
          ))}
          </div>

          <h2 className="heading1 text-center text-4xl font-bold mb-2">
          DataBase & <span className="text-violet-500"> Backend</span>
      </h2>
        
         <div className='skill-container'>
          {skilldb.map((item, index) => (
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