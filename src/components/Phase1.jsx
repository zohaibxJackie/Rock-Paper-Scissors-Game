import icon_paper from '../assets/images/icon-paper.svg';
import icon_rock from '../assets/images/icon-rock.svg';
import icon_scissors from '../assets/images/icon-scissors.svg';
import bg_triagle from '../assets/images/bg-triangle.svg';

const PhaseOne = () => {
  return (
    <>
      <main className='flex justify-center mt-[6rem]'>
        <div className='relative'>
          <img src={bg_triagle} alt="triangle-bg" />
          {/* btn-1 */}
          <div className='absolute top-[-15%] left-0'>
            <div className='h-28 w-28 rounded-full bg-white flex justify-center items-center border-[1rem] border-gradient-rock'>
                <img src={icon_rock} alt="rock" className={'z-10 h-12'} />
            </div>
          </div>

          {/* btn-2 */}
          <div className='absolute top-[-15%] right-0'>
            <div className='h-28 w-28 rounded-full bg-white flex justify-center items-center'>
              <span>
                <img src={icon_paper} alt="paper" className={'z-10 h-12'} /> 
              </span>
            </div>
          </div>

          {/* btn-3 */}
          <div className='absolute bottom-0 left-[50%] translate-x-[-50%]'>
            <div className='h-28 w-28 rounded-full bg-white flex justify-center items-center'>
              <span>
                <img src={icon_scissors} alt="scissors" className={'z-10 h-12'} />
              </span>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default PhaseOne;