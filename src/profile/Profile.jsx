import React from 'react';
import ProfileImage from './ProfileImage';
import PropTypes from 'prop-types';

const Profile = ({fullName, bio, profession}) => {
    const handleName = (e) => {
        e.preventDefault();
        alert(`User's name is ${fullName}`);
    };
    return(
        <>
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
                outline: '10px solid #e9e9e9',
                backgroundColor: '#fafafa'
            }}>
                <ProfileImage source='./images/user.jpg' handleName={handleName} />
                <h3 style={{margin: '30px 0 10px 0'}} >{fullName}</h3>
                <h4 style={{margin: '0px 0px 10px 0px'}} >{profession}</h4>
                <p style={{margin: '10px 0px 0px 0px', opacity: 0.8}}>{bio}</p>
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
    fullName: PropTypes.number,
    profession: PropTypes.number,
    bio: PropTypes.number
};

export default Profile;