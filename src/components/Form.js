import React, { Component } from "react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addData,
  setForm,
  itemUpdate,
  updateItem,
} from "../redux/reducer/taskReducer";

export function Form(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.taskReducer);

  const inputName = useRef(null);
  const inputStatus = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (state.type === "ADD") {
      const dataForm = {
        id: (Math.random() * 1000000000).toFixed(0),
        name: inputName.current.value,
        status: inputStatus.current.value,
      };
      if (dataForm.name !== "") {
        dispatch(addData(dataForm));
      } else {
        alert("Hãy nhập tên!!!");
      }
    } else {
      const dataForm = {
        id: state.itemUpdate.id,
        name: inputName.current.value,
        status: inputStatus.current.value,
      };
      if (dataForm.name !== "") {
        dispatch(updateItem(dataForm));
      } else {
        alert("Hãy nhập tên!!!");
      }
    }
  }

  useEffect(() => {
    if (state.type === "EDIT") {
      inputName.current.value = state.itemUpdate.name;
      inputStatus.current.value = state.itemUpdate.status;
    } else {
      inputName.current.value = "";
      inputStatus.current.value = "1";
    }
  });

  const handleCancel = (event) => {
    inputName.current.value = "";
    inputStatus.current.value = "1";
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {state.type === "ADD" ? "Thêm công việc" : "Cập nhật công việc"}
          <span
            onClick={() => dispatch(setForm({ openForm: false }))}
            className="fa fa-times-circle text-right"
          ></span>
        </h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Tên :</label>
            <input type="text" ref={inputName} className="form-control" />
            <label>Trạng Thái :</label>
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            ref={inputStatus}
          >
            <option value="1">Kích hoạt</option>
            <option value="0">Ẩn</option>
          </select>

          <br />
          <div className="text-center">
            <button onClick={handleSubmit} className="btn btn-warning">
              <span className="fa fa-plus mr-5"></span>
              Lưu Lại
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={handleCancel}
            >
              <span className="fa fa-close mr-5"></span>
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
