const Quote = ({ title, icon }) => {
  return (
    <div className="Quote">
      <div>
        <h1>{title}</h1>
        <i className={`bi bi-${icon}`}></i>
      </div>
    </div>
  );
};

export default Quote;
