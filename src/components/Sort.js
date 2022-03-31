import React, { Component, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { sortDataAZ, sortDataZA, sortStatus1, sortStatus0 } from "../redux/reducer/taskReducer";

export function Sort(props) {
  const state = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();
  const [...dataSort] = state.data;

  function handleSortAZ(event) {
    event.preventDefault();
    dispatch(sortDataAZ(dataSort));
  }
  function handleSortZA(event) {
    event.preventDefault();
    dispatch(sortDataZA(dataSort));
  }
  const handleSortStatus1 = (event) => {
    event.preventDefault();
    dispatch(sortStatus1(dataSort));
  };
  const handleSortStatus0 = (event) => {
    event.preventDefault();
    dispatch(sortStatus0(dataSort));
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          // ref={valueSort}
        >
          Sắp Xếp
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a value="-1" href="" role="button" onClick={handleSortAZ}>
              <span className="fa fa-sort-alpha-asc pr-5"></span>
              Tên A-Z
            </a>
          </li>
          <li>
            <a href="" role="button" onClick={handleSortZA}>
              <span className="fa fa-sort-alpha-desc pr-5"></span>
              Tên Z-A
            </a>
          </li>
          <li role="separator" className="divider"></li>
          <li>
            <a href="" role="button" className="" onClick={handleSortStatus1}>
              Trạng thái kích hoạt
            </a>
          </li>
          <li>
            <a href="" role="button" className="" onClick={handleSortStatus0}>
              Trạng thái ẩn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sort;
