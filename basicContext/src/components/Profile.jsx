import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    console.log(user);
    console.log(user);

    if (!user) return <div className='text-white text-3xl translate-y-52 text-center'>Please Login</div>
    
    return (
        <>
            <div className="displayProfile text-zinc-400 text-5xl translate-y-52 text-center">
            Welcome, {user.username} You are now logged in !
            <img height={200} width={200} className='m-auto rounded-full mt-8' src={user.gitImg} alt="" />
            </div>
        </>
    ) 
    
  
}

export default Profile