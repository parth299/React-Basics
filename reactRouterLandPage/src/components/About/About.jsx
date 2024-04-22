import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function About() {
  const data = useLoaderData();

  // useEffect(() => {
  //   fetch('https://api.github.com/users/parth299')
  //   .then((res) => (res.json()))
  //   .then((data) => {
  //     setImgUrl(data.avatar_url);
  //     setBio(data.bio);
  //   })
  //   .catch((err) => console.log("Something went wrong : ", err))
  // }, [])

  return (
    <div className='text-white w-screen h-screen flex justify-center items-center'>
      <div className="followers mt-10 ">
        <h1 className='text-6xl tracking-widest text-center my-5'>Github Profile</h1>
        <img className='rounded-3xl m-auto py-4 grayscale' src={data.avatar_url} height={400} width={400} alt="" />
        <p className="About text-xl my-5 px-56 text-center">
          {data.bio}
        </p>
      </div>
    </div>
  )
}

export default About

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/parth299');
  return response.json();
}