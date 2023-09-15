import { useEffect, useState } from 'react'
import Card from './TeamCard'
const Team = () => {

// const [teamInfo, setTeamInfo] = useState([])
// useEffect(() => {
//   fetch("https://sheetdb.io/api/v1/0p5kroni86ku8?sheet=team")
//   .then((res) => res.json())
//   .then((data) => setTeamInfo(data))
// })

const teamInfo = [
  {
    "member_name": "Mark Hardy",
    "job_title": "Developer",
    "linkedin": "###",
    "twitter": "###",
    "facebook": "###",
    "instagram": "###",
    "image": "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac"
  },
  {
    "member_name": "Bob Marlo",
    "job_title": "Designer",
    "linkedin": "###",
    "twitter": "###",
    "facebook": "###",
    "instagram": "###",
    "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    "member_name": "Ray Glob",
    "job_title": "Marketing Expert",
    "linkedin": "###",
    "twitter": "###",
    "facebook": "###",
    "instagram": "###",
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  }
]

  return (
    <div  className=' px-[10%] py-[100px] bg-[#1a1f25] font-poppins text-white'>
     <div className="title text-center p-10">
        <h1 className='text-4xl'>Meet The <span className='text-[#ff4151]'>Team</span></h1>
      </div>
      <div className="card-container gap-3 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
      {
        teamInfo.map((teamMember) => (
          <Card teamData={teamMember} />
        ))
      }
      </div>
     
    </div>
  )
}

export default Team
