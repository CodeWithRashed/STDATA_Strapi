import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className='font-poppins nav-container bg-[#1a1f25] flex justify-between px-[10%] py-4 items-center text-white'>
      <div className='logo'>
        <Link to="/">
          <h1 className='font-bold text-2xl'>
            <span className='text-[#ff4151]'>ST</span>DATA
          </h1>
        </Link>
      </div>
      <div className='nav-link hidden lg:block'>
        <ul className='flex gap-8 items-center'>
          <li className='hover:cursor-pointer'>Services</li>
          <li className='hover:cursor-pointer'>Portfolio</li>
          <li className='hover:cursor-pointer'>Team</li>
          <li className='hover:cursor-pointer'>
            <Link to='/blogs'>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className='nav-cta'>
        <button className='p-4 px-8 text-white border-2 border-[#ff4151] rounded-xl'>
          Contact US
        </button>
      </div>
    </div>
  );
};

export default Nav;
