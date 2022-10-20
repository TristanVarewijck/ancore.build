const CustomCursor = () => {
  return (
    <div
      className="customCursor"
      style={{
        transform: `translate3d(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%), 0)`,
      }}
    ></div>
  );
};

export default CustomCursor;
