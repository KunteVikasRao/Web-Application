import './Home.css';
import Navbar from '../NavBar/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="page-content">
        <h1>Welcome to Our Learning Platform</h1>
        <p>Explore a variety of courses and enhance your skills online.</p>
        <p>Join us today and start learning!</p>
        <button className='explore-btn'>Browse Crouses</button>
      </div>
    </div>
  )
}

export default Home