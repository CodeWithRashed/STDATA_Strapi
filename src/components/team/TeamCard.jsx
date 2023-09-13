import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Card = ({teamData}) => {
  console.log(teamData)
  return (
    <div className='container relative group bg-[#5f5d5d2c] border-2 border-[#ff4151] flex justify-center items-center flex-col p-3 rounded-xl  transition-all'>
      <div className='image relative rounded-xl overflow-hidden w-full'>
        <img src={teamData.image} className='object-cover' alt='logo' />
        <div className='cat absolute group-hover:h-8 group-hover:opacity-100 opacity-0 flex gap-3 top-0 left-0 h-0 w-full justify-center items-center bg-[#ff4151] transition-all'>
          <div className='title font-bold'>{teamData.member_name}</div>
        </div>
        <div className='card-cta group-hover:opacity-100 group-hover:h-20 h-0 flex flex-col gap-1 justify-center items-center absolute bottom-0  bg-[#ff4151] opacity-0 left-0 w-full p-4 text-center rounded-b-xl transition-all'>
          <h1>{teamData.job_title}</h1>
          <div className='social-icon flex gap-2'>
          <FontAwesomeIcon icon={faFacebookF} className="bg-[#5f5d5d2c] p-3 w-4  rounded-full"/>
          <FontAwesomeIcon icon={faInstagram} className="bg-[#5f5d5d2c] p-3  w-4 rounded-full"/>          
          <FontAwesomeIcon icon={faTwitter} className="bg-[#5f5d5d2c] p-3 w-4 rounded-full"/>          
          <FontAwesomeIcon icon={faLinkedinIn} className="bg-[#5f5d5d2c] p-3 w-4 rounded-full"/>          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
