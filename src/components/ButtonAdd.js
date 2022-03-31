import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setForm } from "../redux/reducer/taskReducer";

export function ButtonAdd(props) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setForm({ openForm: true, type: "ADD" }))}
      type="button"
      className="btn btn-primary"
    >
      <span className="fas fa-plus mr-5"></span>
      Thêm công việc
    </button>
  );
}
