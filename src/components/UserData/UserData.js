import React from 'react';
import './UserData.css'

const UserData = (props) => {
    const{id,title,completed}=props.user;
    return (
        <div className='userData'>
            <h2>Id: {id}</h2>
            <h4>Title: {title}</h4>
            <p>status: {completed}</p>
        </div>
    );
};

export default UserData;