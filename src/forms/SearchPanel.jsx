import React from "react";
import { Input } from "reactstrap";

const SearchPanel = (props) => {
  return (
    <div className="d-flex my-5">
      <Input
        placeholder="Enter username or email"
        className="mr-3"
        value={props.searchTerm}
        onChange={(e) => props.handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchPanel;
