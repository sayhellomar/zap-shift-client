import { Link } from "react-router";
import logo from "../../assets/logo.png";

export default function Logo({ color }) {
    return (
        <Link to="/" className="flex items-end justify-center">
            <img className="-mr-2" src={logo} alt="ZapShift" />
            <h2 className={`font-extrabold text-[32px] leading-8 ${color}`}>
                ZapShift
            </h2>
        </Link>
    );
}
