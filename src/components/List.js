import React, { Component, useRef, useState } from "react";
import { ListItem } from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { filterData, searchData } from "../redux/reducer/taskReducer";

export function List(props) {
  const findStatus = useRef("-1");
  const keyword = useRef("");
  const state = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();
  // function handleSearch() {
  //   dispatch(searchData(keyword.current.value));
  // }
  return (
    <div className="row mt-15">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  name="filterName"
                  className="form-control"
                  ref={keyword}
                  onChange={()=>dispatch(searchData(keyword.current.value))}
                />
              </td>
              <td>
                <select
                  name="filterStatus"
                  className="form-select"
                  ref={findStatus}
                  onClick={() => dispatch(filterData(findStatus.current.value))}
                >
                  <option value="-1">Tất cả</option>
                  <option value="0">Ẩn</option>
                  <option value="1">Kích hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {state.data &&
              state.data.map((item, index) => {
                return <ListItem item={item} key={index} index={index} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
