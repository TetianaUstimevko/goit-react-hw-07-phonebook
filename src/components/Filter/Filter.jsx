import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = ({ onChange }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
      };

  return (
    <div>
      <label htmlFor="filter">Filter contacts:</label>
      <input type="text" id="filter" onChange={handleChange} />
    </div>
  );
};

export default Filter;