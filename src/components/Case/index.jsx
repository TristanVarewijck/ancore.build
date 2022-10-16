import { useState, useMemo } from "react";
import ModalComponent from "../ModalComponent";

const Case = ({ title, banner, tags }) => {
  const [show, setShow] = useState(false);
  const tagsElements = useMemo(() => {
    const createTagsElements = tags.map((i, index) => {
      return <span key={index}>{i}</span>;
    });
    return createTagsElements;
  }, [tags]);

  const modalHandler = (value) => {
    setShow(value);
  };

  return (
    <div className="case">
      <a type="button" role="button" onClick={() => modalHandler(true)}>
        <section>
          <h5>{title}</h5>
          <div className="banner-container">
            <img src={banner} className="banner img-fluid" alt="Case Banner" />
          </div>
          <div>{tagsElements}</div>
        </section>
      </a>

      {show && <ModalComponent title={title} modalHandler={modalHandler} />}
    </div>
  );
};

export default Case;
