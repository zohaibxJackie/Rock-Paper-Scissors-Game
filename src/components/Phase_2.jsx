import { useEffect, useState } from 'react';
import icon_paper from '../assets/images/icon-paper.svg';
import icon_rock from '../assets/images/icon-rock.svg';
import icon_scissors from '../assets/images/icon-scissors.svg';

const houseChoices = ['Rock', 'Paper', 'Scissor'];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const PhaseTwo = ({ userChoice }) => {
    // const [housePicked, setHousePicked] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [winner, setWinner] = useState('');
    const [houseChose, setHouseChose] = useState('');

    
    useEffect(() => {
        setTimeout(() => {
            setShowResult(true);
            setHouseChose(houseChoices[getRandomNumber(0, 2)]);
            
            console.log("the house choice is ", houseChose);
            console.log("the user choice is ", userChoice);

            if (userChoice === 'Rock' && houseChose === 'Scissor' || userChoice === 'Paper' && houseChose === 'Rock' || userChoice === 'Scissor' && houseChose === 'Paper') {
                setWinner('win');
                console.log('winner');
            } else if (userChoice === houseChose) {
                setWinner('draw');
                console.log('draw');
            } 
            else {
                setWinner('lost');
                console.log('lost');
            }
        }, 1000);

    }, [userChoice])

    return (
        <div className="flex justify-center mt-[6rem] gap-[3rem]">
            <div className='flex flex-col gap-12 items-center'>
                <p className="uppercase text-white font-bold text-sm tracking-[0.2em]">you picked</p>
                {
                    userChoice === 'Paper' ?
                        <div>
                            <div className='h-[12rem] w-[12rem] bg-white flex justify-center items-center gradient-border-paper'>
                                <span>
                                    <img src={icon_paper} alt="paper" className={'z-10 h-12'} />
                                </span>
                            </div>
                        </div>
                        : userChoice === 'Rock' ?
                            <div>
                                <div className='h-[12rem] w-[12rem] flex justify-center items-center gradient-border-rock'>
                                    <span>
                                        <img src={icon_rock} alt="rock" className={'z-10 h-12'} />
                                    </span>
                                </div>
                            </div>
                            : userChoice === 'Scissor' ?
                                <div>
                                    <div className='h-[12rem] w-[12rem] flex justify-center items-center gradient-border-scissor'>
                                        <span>
                                            <img src={icon_scissors} alt="scissors" className={'z-10 h-12'} />
                                        </span>
                                    </div>
                                </div>
                                : ''

                }
            </div>
            {
                showResult && (
                    (winner === 'win') ? 
                        <div className='flex flex-col items-center mt-24'>
                            <p className='uppercase text-white font-bold text-[2rem]'>you win</p>
                            <button className='uppercase bg-white px-10 py-3 tracking-widest rounded text-xs font-bold hover:text-red-600'>play again</button>
                        </div>
                    : (winner === 'draw') ?
                        <div className='flex flex-col items-center mt-24'>
                            <p className='uppercase text-white font-bold text-[2rem]'>draw</p>
                            <button className='uppercase bg-white px-10 py-3 tracking-widest rounded text-xs font-bold hover:text-red-600'>play again</button>
                        </div>
                    : (winner === 'lost') ?
                        <div className='flex flex-col items-center mt-24'>
                            <p className='uppercase text-white font-bold text-[2rem]'>you lost</p>
                            <button className='uppercase bg-white px-10 py-3 tracking-widest rounded text-xs font-bold hover:text-red-600'>play again</button>
                        </div>
                    : <div></div>
                )
            }
            <div className='flex flex-col gap-12 items-center'>
                <p className="uppercase text-white font-bold text-sm tracking-[0.2em]">the house picked</p>
                {
                    houseChose === 'Paper' ?
                        <div>
                            <div className='h-[12rem] w-[12rem] bg-white flex justify-center items-center gradient-border-paper'>
                                <span>
                                    <img src={icon_paper} alt="paper" className={'z-10 h-12'} />
                                </span>
                            </div>
                        </div>
                        : houseChose === 'Rock' ?
                            <div>
                                <div className='h-[12rem] w-[12rem] flex justify-center items-center gradient-border-rock'>
                                    <span>
                                        <img src={icon_rock} alt="rock" className={'z-10 h-12'} />
                                    </span>
                                </div>
                            </div>
                        : houseChose === 'Scissor' ?
                            <div>
                                <div className='h-[12rem] w-[12rem] flex justify-center items-center gradient-border-scissor'>
                                    <span>
                                        <img src={icon_scissors} alt="scissors" className={'z-10 h-12'} />
                                    </span>
                                </div>
                            </div>
                        : ''

                }
            </div>
        </div>
    )
}

export default PhaseTwo;