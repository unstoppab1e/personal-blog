import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img className="sidebarImg" src="images/user.png" alt=""></img>
            <p>Excepteur magna culpa ipsum anim. Id Lorem nulla proident deserunt veniam nisi adipisicing sit aliqua. Laborum ad pariatur labore sunt veniam exercitation velit exercitation labore. Exercitation sit id eu ullamco adipisicing culpa culpa eiusmod officia tempor minim. Deserunt non enim cillum et ex est duis sit velit aliqua nulla.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Sport</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-telegram"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
