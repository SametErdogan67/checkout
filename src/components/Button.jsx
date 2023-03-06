const Button = ({ show, setShow }) => {
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="text-center">
      <button onClick={handleClick} className="btn btn-primary text-white m-2">
        {show ? "Hide Product Bar" : "Show Product Bar"}
      </button>
    </div>
  );
};

export default Button;
