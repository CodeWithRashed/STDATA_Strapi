import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const support = () => {
  return (
    <a title="Get Instant Support"
      href='https://api.whatsapp.com/send?phone=8801738313337'
      className='flex text-2xl items-center justify-center text-white bg-[#25d366] transition-all hover:scale-105 rounded-full h-10 w-10 fixed bottom-10 right-10'
    >
      
        <FontAwesomeIcon icon={faWhatsapp} />
     
     
    </a>
  );
};

export default support;
