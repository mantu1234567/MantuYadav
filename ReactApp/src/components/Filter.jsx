// src/components/Filter.js
import React from 'react';

const Filter = ({ filterType, setFilterType }) => {
  return (
    <div className="filter">
      <label htmlFor="type">Filter by Type:</label>
      <select id="type" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="all">All</option>
        <option value="sales">Sales</option>
        <option value="distribution">Distribution</option>
        <option value="marketing">Marketing</option>
        <option value="product">Product</option>
      </select>
    </div>
  );
};

export default Filter;
