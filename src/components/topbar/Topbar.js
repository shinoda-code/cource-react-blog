import './Topbar.css';
import { Link } from 'react-router-dom';

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-react"></i>
        
      </div>
      <div className="top-">
        <ul className='topList'>
          <li className='topListItem'>
            <Link to= '/' className='link'>Home</Link>
          </li>
          <li className='topListItem'>
            <Link to= '/' className='link'>About</Link>
          </li>
          <li className='topListItem'>
            <Link to= '/' className='link'>Contact</Link>
          </li>
          <li className='topListItem'>
            <Link to= '/write' className='link'>Write</Link>
          </li>
          <li className='topListItem'>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="top-right">
      {
        user ? (
          <img className='topImg' src="http://placehold.it/50x50/e8117f/fff" alt="ha" />
        ) : (
          <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/login'>Login</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/register'>Register</Link>
          </li>
          </ul>
        )
      }
        <i className=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar
