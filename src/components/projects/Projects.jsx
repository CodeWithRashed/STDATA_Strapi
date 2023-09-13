import { useEffect, useState } from "react";
import Card from "./ProjectCard";
const Projects = () => {
  // const [projectData, setProjectData] = useState([]);
  // useEffect(() => {
  //   fetch("https://sheetdb.io/api/v1/0p5kroni86ku8?sheet=projects")
  //     .then((res) => res.json())
  //     .then((data) => setProjectData(data));
  // }, []);
  const projectData = [
    {
      "project_image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      "project_title": "E-Com Brand Lunch",
      "project_cat": "Web Development"
    },
    {
      "project_image": "https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2051&q=80",
      "project_title": "Expend Sales to 10x",
      "project_cat": "Marketing"
    },
    {
      "project_image": "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "project_title": "Bring Idea into Web",
      "project_cat": "Web Design"
    }
  ]
  

  return (
    <div className=' px-[10%] py-[100px] bg-[#1a1f25] font-poppins text-white'>
      <div className='title text-center p-10'>
        <h1 className='text-4xl'>
          Most Recent <span className='text-[#ff4151]'>Projects</span>
        </h1>
      </div>
      <div className='card-container gap-4 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
        {projectData.map((project) => 
        <Card projectData={project}/>
        
        )}
       
      </div>
    </div>
  );
};

export default Projects;
