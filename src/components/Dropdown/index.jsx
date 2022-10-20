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

{
  /* <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
  {option}
</Dropdown.Toggle>
<Dropdown.Menu>
  <Dropdown.Item id="Recent" onClick={sortCases}>
    Recent
  </Dropdown.Item>
  <Dropdown.Item id="A/Z" onClick={sortCases}>
    A/Z
  </Dropdown.Item>
  <Dropdown.Item id="All" onClick={sortCases}>
    All
  </Dropdown.Item>
</Dropdown.Menu>
</Dropdown> */
}
