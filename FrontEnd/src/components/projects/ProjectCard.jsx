import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const Card = ({projectData}) => {

 
  return (
    <div className='container group border-2 border-[#ff4151] relative flex justify-center items-center flex-col p-3 rounded-xl  transition-all'>
      <div className='image overflow-hidden rounded-xl'>
        <img src={projectData.project_image} className="group-hover:scale-110  transition-all" alt='logo' />
      </div>
      <div className='project-details absolute bg-white h-16  rounded-xl text-black w-54 bottom-8 left-8'>
        <div className='details relative p-2 rounded-lg'>
          <div className='text-details'>
            <h1>
              <span className='font-bold'>Project:</span> {projectData.project_title}
            </h1>
            <h1>
              <span className='font-bold'>Category:</span> {projectData.project_cat}
            </h1>
          </div>
          <div className='group-hover:h-16  opacity-0 group-hover:opacity-100  bg-[#ff4151] cta-overly absolute top-0 left-0 rounded-lg h-0 w-full transition-all'>
          <div className='text-white cta hover:cursor-pointer gap-2 h-16 p-2 rounded-lg flex justify-center items-center transition-all'>
          <h1>See Case Study</h1>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
