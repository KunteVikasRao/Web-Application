import './Header.css';
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <nav>
        {/* <Link to="home">Home</Link>
        <Link to="courses">Courses</Link>
        <Link to="profile">Profile</Link> */}
        <Outlet/>
    </nav>
  )
}

export default Header