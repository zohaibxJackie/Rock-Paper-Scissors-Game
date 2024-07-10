import { useState } from 'react';
import icon_paper from '../assets/images/icon-paper.svg';
import icon_rock from '../assets/images/icon-rock.svg';
import icon_scissors from '../assets/images/icon-scissors.svg';

const PhaseTwo = ( { userChoice } ) => {
    const [housePicked, setHousePicked] = useState(true);
    setTimeout(() => {
        setHousePicked(false);
    }, 1000);
    return (
        <div className="flex justify-center mt-[6rem] gap-16">
            <div className='flex flex-col gap-12 items-center'>
                <p className="uppercase text-white font-bold text-sm tracking-[0.2em]">you picked</p>
                <div className='h-[10rem] w-[10rem] bg-white flex justify-center items-center gradient-border-paper'>
                    <span>
                        <img src={icon_paper} alt="paper" className={'z-10 h-12'} />
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-12 items-center'>
                <p className="uppercase text-white font-bold text-sm tracking-[0.2em]">the house picked</p>
                <div className='h-[10rem] w-[10rem] bg-[#0000005f] rounded-full'>
                    {housePicked ? <div></div> :
                        <div className='h-full w-full bg-white flex justify-center items-center gradient-border-paper'>
                            <span>
                                <img src={icon_paper} alt="paper" className={'z-10 h-12'} />
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PhaseTwo;