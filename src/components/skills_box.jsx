import React from 'react'

const SkillBox = ({program}) => {
  return (
    <div className='skill-box'> 
      <h1>{program.name}</h1>
      <img src={program.image} alt="" />
            
      
    </div>
  )
}

export default SkillBox