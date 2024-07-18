import icon_paper from '../assets/images/icon-paper.svg';
import icon_rock from '../assets/images/icon-rock.svg';
import icon_scissors from '../assets/images/icon-scissors.svg';
import bg_triagle from '../assets/images/bg-triangle.svg';

const PhaseOne = ({ onButtonClick }) => {
  return (
    <>
      <div className='flex justify-center mt-[6rem]'>
        <div className='relative'>
          <img src={bg_triagle} alt="triangle-bg" />
          {/* btn-1 */}
          <div className='absolute top-[-15%] left-0 cursor-pointer'>
            <div onClick={() => { onButtonClick("Paper") }} className='h-[8rem] w-[8rem] sm:h-[7rem] sm:w-[7rem] bg-white flex justify-center items-center gradient-border-paper sm:border-[0.6rem]'>
              <span>
                <img src={icon_paper} alt="paper" className={'z-10 h-12'} />
              </span>
            </div>
          </div>
          {/* btn-2 */}
          <div className='absolute top-[-15%] right-0 cursor-pointer'>
            <div onClick={() => { onButtonClick("Scissor") }} className='h-[8rem] w-[8rem] sm:h-[7rem] sm:w-[7rem] flex justify-center items-center gradient-border-scissor sm:border-[0.6rem]'>
              <span>
                <img src={icon_scissors} alt="scissors" className={'z-10 h-12'} />
              </span>
            </div>
          </div>
          {/* btn-3 */}
          <div className='absolute bottom-0 left-[50%] translate-x-[-50%] cursor-pointer'>
            <div onClick={() => { onButtonClick("Rock") }} className='h-[8rem] w-[8rem] sm:h-[7rem] sm:w-[7rem] flex justify-center items-center gradient-border-rock sm:border-[0.6rem]'>
              <span>
                <img src={icon_rock} alt="rock" className={'z-10 h-12'} />
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PhaseOne;