import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { resetPass } from "./LoginController";

export default function ResetPassword(){
    const [email, setEmail] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [msg, setMsg] = useState('');


    const handleInputChange = (event) => {
        const {value} = event.target;
        setEmail(value);
        console.log(email);
    }
    const handleSubmit = async (email) => {
        const {success, msg} = await resetPass(email);
        if(success){
            alert(msg);
            setIsCorrect(false);
        }
        else{
            setIsCorrect(true);
            setMsg(msg);
        }
    }

    return (
        <div className="bg-gray-300 min-h-screen pt-20 pb-6">
            <div className="bg-white max-w-lg mx-auto p-8 my-10 rounded-lg shadow-2xl">
                <div>
                    <h3 className="font-bold text-3xl">Reset Password </h3>
                </div>   
                <div className="mt-10"> 
                    <div className="space-y-4">
                        <div >
                            <label className="block font-semibold mb-1" >Email</label>
                            <input 
                                type="email" 
                                onChange={handleInputChange}
                                value={email}
                                name="email"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                        </div>
                        {
                            isCorrect && <p className="text-red-600 pt-2 font-semibold"> {msg} </p>
                        }
                        <div >
                            <NavLink className="text-sm font-semibold text-blue-600 hover:underline mb-6 " to="/admin/login" >Back to Login?</NavLink>
                        </div>
                        <div className="flex">
                            <button className="bg-purple-600 hover:bg-purple-700 rounded-2xl text-white py-2 w-full shadow-lg hover:shadow-xl"  type="submit" onClick={() =>{handleSubmit(email)}}>Reset Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}