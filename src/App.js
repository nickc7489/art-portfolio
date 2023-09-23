import './App.css';
import GreenStar from './images/branding/Star Asset (Green).png'

function App() {
  return (
    <div className="App">
      <img src={GreenStar} style={{width: '1200px', position: 'absolute', left: '-617px', top: '-700px'}}/>
      <img src={GreenStar} style={{width: '500px', position: 'absolute', left: '-100px', top: '-300px'}}/>
    </div>
  );
}

export default App;
