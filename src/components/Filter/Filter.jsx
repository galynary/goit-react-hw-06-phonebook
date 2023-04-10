import React from 'react';
import { FilterWrapper, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, setFilterValue } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onChange = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };
  return (
    <FilterWrapper>
      <Label htmlFor="">
        Find name
        <Input
          type="text"
          name="filter"
          value={filterValue}
          onChange={onChange}
          placeholder=" "
        />
      </Label>
    </FilterWrapper>
  );
}
