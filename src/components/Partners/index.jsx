import { useState } from "react";

const Partners = () => {
  const items = [
    {
      id: 1,
      partner: "Github-1",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      id: 2,
      partner: "Github-2",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      id: 3,
      partner: "Github-3",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      id: 4,
      partner: "Github-4",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      id: 5,
      partner: "Github-5",
      logo: "github.svg",
      link: "https://github.com",
    },
    {
      id: 6,
      partner: "Github-6",
      logo: "github.svg",
      link: "https://github.com",
    },
  ];

  const partnerElements = items.map((i) => {
    return (
      <li key={i.id}>
        <a href="#">
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
