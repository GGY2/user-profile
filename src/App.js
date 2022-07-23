import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
        <Profile 
        // fullName='Travis Brown' 
        profession='Teacher'
        bio={`React makes things much easier, you should definitely try it,
        React makes things much easier, you should definitely try it,
        React makes things much easier...`} 
        ></Profile>
    </div>
  );
}

export default App;
