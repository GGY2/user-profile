import React from 'react';
import PropTypes from 'prop-types';
import Customers from './Customers';

const Profile = ({fullName, bio, profession, handleName, children}) => {
    
    return(
        <>
            <div onMouseOver={() => handleName(fullName)} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'justify',
                width: '300px',
                height: '400px',
                padding: '40px',
                borderRadius: '8px',
                outline: '10px solid #e9e9e9',
                backgroundColor: '#fafafa'
                }} 
                >
                {children}
                <h3 style={{margin: '30px 0 10px 0'}} >{fullName}</h3>
                <h4 style={{margin: '0px 0px 10px 0px'}} >{profession}</h4>
                <p style={{margin: '10px 0px 0px 0px', opacity: 0.8}}>{bio}</p>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'justify',
                width: '300px',
                height: '400px',
                padding: '40px',
                borderRadius: '8px',
                outline: '10px solid #ffff',
                backgroundColor: '#a5ffeb'
            }}>
                <Customers />
            </div>
        </>
    );
};

Profile.defaultProps = {
    fullName: 'Jeff Gordon',
    profession: 'Engineer',
    bio: 'He has never been a public figure'
};

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
};

export default Profile;