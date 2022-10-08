const Case = ({ title, banner, tags, href }) => {
  const tagsElements = tags.map((i) => {
    return <span>{i}</span>;
  });
  return (
    <li className="case">
      <a href={href}>
        <section>
          <h4>{title}</h4>
          <img src={banner} className="img-fluid mb-2" alt="Responsive image" />
          <div>{tagsElements}</div>
        </section>
      </a>
    </li>
  );
};

export default Case;
