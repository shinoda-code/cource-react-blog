import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT ME</span>
       <img src="http://placehold.it/300x200/e8117f/fff" alt="" />
       <p>こんにちは。Reactでブログサイトを作るレクチャ―やっています。Web制作的なアプローチで、ものすごくやりやすい。自分にもReactが理解出来そうな気がしてきた。本題はここからだろうけど、短期集中で頑張ろうと思います。</p>
     </div>
     <div className="sidebarItem">
       <span className="sidebarTitle">CATEGORIES</span>
       <ul className="sidebarList">
         <li className="sidebarListItem">Life</li>
         <li className="sidebarListItem">Music</li>
         <li className="sidebarListItem">Style</li>
         <li className="sidebarListItem">Tech</li>
         <li className="sidebarListItem">Cinema</li>
       </ul>
     </div>
     <div className="sidebarItem">
       <span className='sidebarTitle'>FOLLOW US</span>
       <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-instagram"></i>
        <i className="sidebarIcon fab fa-github-square"></i>
        <i className="sidebarIcon fab fa-react"></i>
       </div>
     </div>
    </div>
  )
}

export default Sidebar