import "./Dots.css";

const Dots = ({ side }) => {
  return (
    <div className={`dots ${side === "left" ? "left" : "right"}`}>
      {[...Array(6)].map((_, idx) => (
        <span
          key={idx}
          className="dot"
          style={{ animationDelay: `${idx * 0.3}s` }}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
