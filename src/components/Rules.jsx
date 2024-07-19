import rules_image from "../assets/images/image-rules.svg";
import icon_close from "../assets/images/icon-close.svg";
import { Link } from "react-router-dom";

const Rules = ({onClick}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-[0.6] z-10">
        <div className="bg-white p-6 rounded">
            <div className="flex justify-between items-center w-full min-w-max mb-4">
                <p className="font-bold text-background-radialGradientEnd uppercase">Rules</p>
                <Link to={'/Rock-Paper-Scissors-Game'}>
                    <img src={icon_close} onClick={onClick} alt="close" className="h-[0.9em] cursor-pointer" />
                </Link>
            </div>
            <div className="pointer-events-none">
                <img src={rules_image} alt="Rules image" />
            </div>
        </div>
    </div>
  )
}

export default Rules;
