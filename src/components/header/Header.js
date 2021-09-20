import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src="http://placehold.it/1000x500/e8117f/fff" alt="headerImg" />
    </div>
  )
}

export default Header
