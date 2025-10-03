import "./Buttons.css";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="buttons">
      <button>Skill Badges</button>

     <Link to="/leaderboard">
        <button className="leaderboard-btn">Leaderboard</button>
      </Link> 

<Link to="/faq">
  <button className="faq-btn">FAQs</button>
</Link>
    </div>
  );
};

export default Buttons;

