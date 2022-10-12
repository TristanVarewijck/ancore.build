const Case = ({ title, banner, tags, href }) => {
  const tagsElements = tags.map((i) => {
    return <span>{i}</span>;
  });
  return (
    <div className="case">
      <a href={href}>
        <section>
          <h6>{title}</h6>
          <div className="banner-container">
            <img src={banner} className="banner img-fluid" alt="Case Banner" />
          </div>
          <div>{tagsElements}</div>
        </section>
      </a>
    </div>
  );
};

export default Case;
