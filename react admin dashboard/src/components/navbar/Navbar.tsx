import './navbar.scss';
import logo from '../../img/j-logo.jpeg';
import img1 from '../../img/pexels-pixabay-38554-removebg-preview.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" className="logoImg" />
        <span>Justadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={img1} alt="" />
          <span>Ruth</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>

    </div>
  );
};

export default Navbar;