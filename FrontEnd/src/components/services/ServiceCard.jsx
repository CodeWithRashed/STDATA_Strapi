import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Web from "../../assets/icons/web.svg";
import Design from "../../assets/icons/design.svg";
import Marketing from "../../assets/icons/marketing.svg";
import DataEntry from "../../assets/icons/dataentry.svg";

const icons = {
  web: Web,
  design: Design,
  marketing: Marketing,
  dataEntry: DataEntry,
};

const description = {
  web: "Get Your Business online with our web development service",
  design: "Improve look and fell of your website",
  marketing: "Get More SELLS!!!",
  dataEntry: "No Worry! We will handle your day to day admin task",
};

const Card = (props) => {
  let iconImage = icons[props.icon];
  let serviceDescription = description[props.description];
  return (
    <div className='container flex group relative bg-white text-black p-6 justify-center items-center rounded-lg h-44 transition-all'>
      <div className='card group-hover:blur-sm'>
        <div className='icon flex justify-center items-center'>
          <img className='w-8 h-8' src={iconImage} alt='' />
        </div>
        <h1 className='text-2xl text-center'>{props.service_name}</h1>
        <p className='text-base text-center text-[#97a3b2]'>
          {serviceDescription}
        </p>
      </div>
      <div className='overly group-hover:h-44 flex justify-center items-center absolute h-0 bg-[#5f5d5d2c] w-full opacity-0 hover:opacity-100 transition-all'>
        <div className='text-white cta hover:cursor-pointer gap-2  bg-[#ff4151] p-2 rounded-lg flex justify-center items-center transition-all'>
          <h1>Learn More</h1>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
};


export default Card;
