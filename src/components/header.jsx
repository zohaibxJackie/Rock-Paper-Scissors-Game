import { useContext } from 'react';
import logo from '../assets/images/logo.svg';
import ScoreContext from '../context/score/ScoreContext';

const Header = () => {
  const {score} = useContext(ScoreContext);
  return (
    <>
      {/* this is the upper section */}
      <div className="max-w-[50%] sm:min-w-[80%] mx-auto border-2 rounded-lg border-neutral-headerOutline flex justify-between px-[0.8rem] py-[1rem]">
        <div>
          <img src={logo} alt="logo-image" className='sm:h-16' />
        </div>
        <div className="bg-white flex justify-center flex-col px-10 rounded min-h-min sm:py-1">
          <p className="uppercase text-neutral-scoreText text-[0.7rem] font-bold">score</p>
          <p className="uppercase text-neutral-darkText text-[2.5rem] font-bold leading-8">{score}</p>
        </div>
      </div>
    </>
  )
}

export default Header;