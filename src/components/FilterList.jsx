import React from "react";
import "./styles/filterList.css";

const FilterList = ({ suggestList, setSearchInput }) => {
  console.log({ suggestList });

  const handleClick = (id) => setSearchInput(id);

  return (
    <ul className="filterList">
      {suggestList?.map((location) => (
        <li onClick={() => handleClick(location.id)} key={location.id}>
          {location.id} {location.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
