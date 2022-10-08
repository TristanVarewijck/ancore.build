const Link = (props) => {
  return (
    <a
      role={props.role !== "button" ? "link" : "button"}
      className={`btn btn-${props.type} mt-2`}
      href={props.href}
      onClick={!props.handleButton ? null : props.handleButton}
    >
      {props.text}
      {props.icon && <i class={`bi bi-${props.icon}`}></i>}
    </a>
  );
};

export default Link;
