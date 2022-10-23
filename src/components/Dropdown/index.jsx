import Dropdown from "react-bootstrap/Dropdown";

const DropdownComponent = ({ optionHandler, options, selected }) => {
  const dropdownItemsElements = options.map((i) => {
    return (
      <Dropdown.Item key={i} id={i} onClick={optionHandler}>
        {i}
      </Dropdown.Item>
    );
  });

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selected}
      </Dropdown.Toggle>
      <Dropdown.Menu>{dropdownItemsElements}</Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
