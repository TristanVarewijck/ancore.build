const TextBlock = ({ title, subtitle, text, index }) => {
  return (
    <div className="text-block">
      <div>
        <p>{`0${index}`}</p>
      </div>

      <div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>

      {text && <div className="text">{text}</div>}
    </div>
  );
};

export default TextBlock;
