import './App.css';
import Profile from './profile/Profile';
import ProfileImage from './profile/ProfileImage';

function App() {
  const handleName = (fullName) => {
    alert(`User's name is ${fullName}`);
};

  return (
    <div className="App">
        <Profile 
        fullName='Travis Brown' 
        profession='Teacher'
        bio={`React makes things much easier, you should definitely try it,
        React makes things much easier, you should definitely try it,
        React makes things much easier...`} 
        handleName={handleName}
        >
          <ProfileImage source='./images/user.jpg' />
        </Profile>
    </div>
  );
}

export default App;
