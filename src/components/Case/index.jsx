const Case = ({ title, banner, tags, href }) => {
  const tagsElements = tags.map((i) => {
    return <span>{i}</span>;
  });
  return (
    <li className="case">
      <a href={href}>
        <section>
          <h6>{title}</h6>
          <div className="banner-container">
            <img
              src={banner}
              className="banner img-fluid"
              alt="Responsive image"
            />
          </div>

          <div>{tagsElements}</div>
        </section>
      </a>
    </li>
  );
};

export default Case;
