import { Link } from "react-router-dom";

export default function SeeMore({ path }) {
    return (
        <div className="flex justify-end font-text text-red-400 font-bold text-xs">
            <div>
                <button className="border-b-2 border-red-400">
                    <Link to={path}>
                        See more ...
                    </Link>
                </button>
            </div>
        </div>
    )
}