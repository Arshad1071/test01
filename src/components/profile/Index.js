import React from 'react'
import { useSelector } from 'react-redux';
const Profile = () => {

    const user = useSelector((user) => user.authReducer);   
    return (
        <div>
           <h6>Name : {user.user[0].firstName}</h6>
           <h6>Email : {user.user[0].email}</h6>  
        </div>
    )
}

export default Profile;
