import React, { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gitImg, setImg] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((res) => setImg(res.avatar_url))
        .then((res) => setUser({
            username, password, gitImg
        }))
        .catch((err) => {
            console.log(err);
        })

        

    }   

  return (
    <div className='translate-y-40 flex justify-center'>
        <div className="innerLogin w-1/2">
            <form onSubmit={handleSubmit} className='text-white' action="">
                <label className='px-5 font-bold text-xl' htmlFor="username">Username :</label>
                <input
                    className='bg-slate-400 text-black p-1 rounded-sm'
                    type="text" 
                    name="" 
                    id="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className='px-5 font-bold text-xl' htmlFor="password">Password :</label>
                <input
                    className='bg-slate-400 text-black p-1 rounded-sm'
                    type="password" 
                    name="" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className='ml-5 m-4 border text-center px-4 py-1 rounded-md bg-blue-500 border-none font-bold'>Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login