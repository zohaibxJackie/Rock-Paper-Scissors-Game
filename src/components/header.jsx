import icon_close from '../assets/images/icon-close.svg';

import image_rules from '../assets/images/image-rules.svg';
import logo from '../assets/images/logo.svg';


const Header = () => {
  return (
    <>
      {/* this is the upper section */}
      <div className="max-w-[50%] mx-auto border-2 rounded-lg border-neutral-headerOutline flex justify-between px-[0.8rem] py-[1rem]">
        <div>
          <img src={logo} alt="logo-image" />
        </div>
        <div className="bg-white flex justify-center flex-col px-10 rounded">
          <p className="uppercase text-neutral-scoreText text-[0.7rem] font-bold">score</p>
          <p className="uppercase text-neutral-darkText text-[2.5rem] font-bold leading-8">12</p>
        </div>
      </div>
    </>
  )
}

export default Header;