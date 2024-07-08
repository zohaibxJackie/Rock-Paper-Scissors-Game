import bg_triagle from '../assets/images/bg-triangle.svg';
import icon_close from '../assets/images/icon-close.svg';
import icon_paper from '../assets/images/icon-paper.svg';
import icon_rock from '../assets/images/icon-rock.svg';
import icon_scissors from '../assets/images/icon-scissors.svg';
import image_rules from '../assets/images/image-rules.svg';
import logo from '../assets/images/logo.svg';


const Header = () => {
  return (
    <div className="wrapper max-w-[1400px] pt-[2.5rem]">
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
      {/* this is the lower section */}
      <main className='flex justify-center mt-[6rem]'>
        <div className='relative'>
          <img src={bg_triagle} alt="triangle-bg" />
          <div className='absolute top-[-5%] left-[-5%] flex'>
            <span className='z-10 relative before:content-[""] before:rounded-full before:w-[10.9rem]
             before:h-[10.9rem] before:top-[-146.9%] before:left-[-129%]
             before:-z-10 before:absolute before:bg-gradient-to-b before:from-primary-rockGradientStart before:to-primary-rockGradientEnd'>
            <span className={'relative before:content-[""] before:absolute before:h-[9rem] before:w-[9rem] before:translate-x-[-50%] before:translate-y-[-50%] before:top-[1rem] before:left-[25px] before:bg-white before:rounded-full before:z-[-1]'}>
                <img src={icon_rock} alt="rock" className={'z-10'} />
              </span>
            </span>
          </div>
          <div className='absolute top-[-20%] right-[0%] flex'>
            <span className='z-10 relative before:content-[""] before:rounded-full before:w-[10.5rem]
             before:h-[10.5rem] before:top-[-93%] before:left-[-119%]
             before:-z-10 before:absolute before:bg-gradient-to-b before:from-primary-rockGradientStart before:to-primary-rockGradientEnd'>
              <span className={'relative before:content-[""] before:absolute before:inset-[-2.5rem] before:bg-white before:rounded-full before:z-[-1]'}>
                <img src={icon_paper} alt="paper" className={'z-10'} />
              </span>
            </span>
          </div>

          <div className='absolute bottom-[0%] left-[40%] flex'>
            <span className='z-10 relative before:content-[""] before:rounded-full before:inset-[-3.5rem] before:-z-10 before:absolute before:bg-gradient-to-b before:from-primary-rockGradientStart before:to-primary-rockGradientEnd'>
              <span className={'relative before:content-[""] before:absolute before:inset-[-2.5rem] before:bg-white before:rounded-full before:z-[-1]'}>
                <img src={icon_scissors} alt="scissors" className={'z-10'} />
              </span>
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Header;