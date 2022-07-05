import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "./LoginController";

export default function LogIn({setToken}){
    const [admin, setAdmin] = useState({
        email : "",
        password : ""
    });
    const [isCorrect, setIsCorrect] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        setToken(null);
        localStorage.removeItem("token")
    }, [])


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAdmin({ ...admin, [name]: value });
        console.log(admin);
    }
    const handleSubmit = async (admin) => {
        const {token, msg, success} = await login(admin);
        if(success){
            localStorage.setItem('token', token);
            setToken(token); 
        }
        else{
            setIsCorrect(true);
            setMsg(msg);
        }
    }

    return (
        <div className="bg-gray-300 min-h-screen pt-20 pb-6">
            <div className="bg-white max-w-lg mx-auto p-8  my-10 rounded-lg shadow-2xl">
                <div>
                    <h3 className="font-bold text-3xl">Login</h3>
                </div>   
                <div className="mt-10"> 
                    <div className="space-y-4">
                        <div>
                            <label className="block font-semibold mb-1" >Email</label>
                            <input 
                                type="email" 
                                onChange={handleInputChange}
                                value={admin.email}
                                name="email"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                        </div>
                        <div >
                            <label className="block font-semibold mb-1" >Password</label>
                            <input 
                                type="password" 
                                onChange={handleInputChange}
                                value={admin.password}
                                name="password"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                        </div>
                        {
                            isCorrect && <p className="text-red-600 pt-2 font-semibold"> {msg} </p>
                        }
                        <div>
                            <NavLink className="text-sm font-semibold text-blue-600 hover:underline mb-6 " to="/admin/reset-password" >Forgot Password?</NavLink>
                        </div>
                        <div className=" flex">
                            <button className=" w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-2xl text-white shadow-lg hover:shadow-xl" type="submit" onClick={() => {handleSubmit(admin)}}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
