import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [destination, setDestination] = useState('');

    const handleChange = (e) => {
        setDestination(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(destination);
    };

    return (
        <div className="search-bar">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
        </div>
    );
}

export default SearchBar;
