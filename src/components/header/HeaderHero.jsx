import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
const header = () => {
  return (
    <div className=' px-[10%] py-[100px] bg-[#1a1f25] font-poppins h-[85vh] flex flex-col justify-center items-center'>
      <div className="header-content md:w-full  lg:w-[80%] m-auto text-center text-white">
      <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Elevate your business <br /> with our services.
      </h1>
      <p className="text-[#97a3b2] font-semibold my-8">
        we specialized in helping business with their needs
      </p>
      <div className='header-cta space-x-4 my-8'>
        <button className='bg-white text-black rounded-xl font-bold px-4 py-2'>
          Get Started <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
        <button className='bg-[#5f5d5d2c] text-white rounded-xl font-bold px-4 py-2'>
          Testimonials <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      </div>
      </div>
  
    </div>
  );
};

export default header;
