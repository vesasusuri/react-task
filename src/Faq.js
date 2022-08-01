import { useState } from "react";

const Faq = ({ discription }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div className="single-history">
      <button
        className="h-head"
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        ^
      </button>

      {toggleThisElement && <div className="h-info">{discription}</div>}
    </div>
  );
};
export default Faq;
