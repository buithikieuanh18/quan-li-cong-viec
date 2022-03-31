import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setForm, deleteData, getData, changeStatus } from "../redux/reducer/taskReducer";

export const ListItem = (props) => {
  // console.log(props.item);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.taskReducer);

  function handleEdit(event) {
    event.preventDefault();
    dispatch(
      setForm({
        openForm: true,
        type: "EDIT",
      })
    );
    // lay dl
    dispatch(getData(props.item));
  }

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.item.name}</td>
      <td className="text-center">
        <span className="label label-info" onClick={()=>dispatch(changeStatus(props.item))}>
          {props.item.status === '0' ? "Ẩn" : "Kích hoạt"}
        </span>
      </td>
      <td className="text-center">
        <button onClick={handleEdit} type="button" className="btn btn-warning">
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteData(props.item.id))}
        >
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
};
