const Quote = ({ title, icon, animatedLastWord }) => {
  return (
    <div className="Quote">
      <div>
        <h1>{title}</h1>
        {animatedLastWord && (
          <h1 className="quote-lastWord">{animatedLastWord}</h1>
        )}
      </div>
      <i className={`bi bi-${icon}`}></i>
    </div>
  );
};

export default Quote;
