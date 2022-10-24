import { useState, useMemo } from "react";
import CaseModal from "../CaseModal";

const Case = ({ content }) => {
  const [show, setShow] = useState(false);

  const tagsElements = useMemo(() => {
    const createTagsElements = content.tags.map((i, index) => {
      return <span key={index}>{i}</span>;
    });
    return createTagsElements;
  }, [content.tags]);

  const modalHandler = (value) => {
    setShow(value);
  };

  return (
    <div className="case">
      <a type="button" role="button" onClick={() => modalHandler(true)}>
        <section>
          <h5>{content.title}</h5>
          <div className="banner-container">
            <img
              src={content.images.thumbnail}
              className="banner img-fluid"
              alt="Case Banner"
            />
          </div>
          <div>{tagsElements}</div>
        </section>
      </a>

      {show && <CaseModal content={content} modalHandler={modalHandler} />}
    </div>
  );
};

export default Case;
