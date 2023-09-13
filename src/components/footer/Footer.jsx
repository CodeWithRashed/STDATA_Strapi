import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className=' px-[10%] py-[100px] bg-[#1a1f25] font-poppins text-white text-center'>
      <div className='social-icon flex gap-2 mb-4 justify-center items-center'>
        <FontAwesomeIcon
          icon={faFacebookF}
          className='bg-[#5f5d5d2c] p-3 w-4  rounded-full'
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className='bg-[#5f5d5d2c] p-3  w-4 rounded-full'
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className='bg-[#5f5d5d2c] p-3 w-4 rounded-full'
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className='bg-[#5f5d5d2c] p-3 w-4 rounded-full'
        />
      </div>

      <small>Copyright &copy; ST Data All right reserved </small>
    </div>
  );
};

export default Footer;
