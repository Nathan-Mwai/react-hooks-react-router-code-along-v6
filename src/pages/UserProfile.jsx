import React from 'react'
import NavBar from './NavBar'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useState({})
    const params = useParams()
    const userId = params.id

    useEffect(()=> {
        fetch(`http://localhost:4000/users/${userId}`)
        .then(r=> r.json())
        .then(data => setUser(data))
        .catch(err => console.error(err))
    },[userId])

    if(!user.name){
        return <h1>Loading...</h1>
    }

  return (
    <>
    <header>
        <NavBar/>
    </header>
    <main>
        {/* <h1>User Profile</h1> */}
        <h1>{user.name}</h1>
    </main>
    </>
  )
}

export default UserProfile