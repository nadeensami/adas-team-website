import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="subheading">
        <h6>NAVIGATION</h6>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/events">Events</Link>
        <Link to="/jobboard">Job Board</Link>
        <Link to="/join">Join</Link>
        <Link to="/connect">Contact</Link>
      </div>
    </div>
  );
}

export default Navigation;
