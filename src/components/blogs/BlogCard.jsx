import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Card = ({blogData}) => {
  return (
    
    <div className='container text-white relative group bg-[#5f5d5d2c] border-2 border-[#ff4151] flex justify-center items-center flex-col p-3 rounded-xl  transition-all'>
      <div className='image relative rounded-xl overflow-hidden'>
               <img src={blogData.blog_image} className='object-cover h-48 w-96' alt='logo' />
        <div className='cat absolute flex gap-3 bottom-4 left-4'>
          <div className='category  bg-[#ff4151]  px-3 rounded'>{blogData.blog_category}</div>
          <div className='postDate  bg-[#ff4151] px-3 rounded'>{blogData.blog_post_date}</div>
        </div>
      </div>
      <div className='details py-4'>
        <h1 className='text-xl'>{blogData.blog_title}</h1>
        <div className='card-cta group-hover:opacity-100  group-hover:h-16 h-0 flex gap-1 justify-center items-center absolute bottom-0  bg-[#ff4151] opacity-0 left-0 w-full p-4 text-center rounded-b-xl transition-all'>
        <h1>Read More</h1>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div> 
  );
};

export default Card;
