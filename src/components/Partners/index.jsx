const Partners = () => {
  const items = [
    {
      partner: "Github",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      partner: "Github",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      partner: "Github",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      partner: "Github",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      partner: "Github",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      partner: "Github",
      logo: "github.svg",
      link: "https://github.com",
    },
  ];

  const partnerElements = items.map((i) => {
    return (
      <li>
        <a href={i.link}>
          <img
            className="img-fluid"
            src={`/assets/partners/${i.logo}`}
            alt={`${i.partner} logo`}
          />
        </a>
      </li>
    );
  });

  return (
    <div className="partners">
      <h2>Our proud Partners</h2>
      <ul className="logo-list">{partnerElements}</ul>
    </div>
  );
};

export default Partners;
