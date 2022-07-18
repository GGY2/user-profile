import React from 'react';

const ProfileImage = ({handleName, source}) => {
    return(
        <div style={{
            height: '150px', 
            width: '150px', 
            borderRadius: '50%', 
            overflow: 'hidden',
            outline: '10px solid #e9e9e9'
        }}>
        <img src={source} style={{
            objectFit: 'contain', 
            width:'150px', 
            height: 'auto', 
            marginTop: '-15px'
        }} onMouseOver={(e) => handleName(e)} />
        </div>
    );
};

export default ProfileImage;