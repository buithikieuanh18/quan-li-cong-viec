import React, { Component, useRef } from "react";
import {searchData} from "../redux/reducer/taskReducer";
import { useDispatch } from "react-redux";

export function Find(props) {
  const keyword = useRef("");
  const dispatch = useDispatch();

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          type="text"
          name="keyword"
          className="form-control"
          placeholder="Nhập từ khóa"
          ref={keyword}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary" onClick={() => dispatch(searchData(keyword.current.value))}>
            <span className="fas fa-search mr-5"></span>
            Tìm
          </button>
        </span>
      </div>
    </div>
  );
}
