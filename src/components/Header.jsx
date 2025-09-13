import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header flex justify-end items-center py-4">
      {/* Other header content */}
      <input
        type="text"
        id="searchBar"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
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
