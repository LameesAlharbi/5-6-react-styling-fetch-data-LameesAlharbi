import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    // TODO 1.2: Set wrapper div className EXACTLY to "mb-4"
   <div className="mb-4">
      <input
        className="form-control"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search users by name..."
      />
    </div>
  );
}

export default SearchBar;