const textHeaderBlock = (props) => {
  return (
    <div className="headerText-block">
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};

export default textHeaderBlock;
