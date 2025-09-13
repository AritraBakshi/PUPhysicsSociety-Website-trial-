import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      {/* Other header content */}
      <input
        type="text"
        id="searchBar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: '0.5em',
          fontSize: '1em',
          width: '250px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginLeft: 'auto'
        }}
      />
    </header>
  );
};

export default Header;
