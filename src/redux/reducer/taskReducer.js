import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openForm: false,
  type: "ADD",
  data: JSON.parse(localStorage.getItem("data")) || [],
  itemUpdate: {},
};

export const taskReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.openForm = action.payload.openForm;
      state.type = action.payload.type;
    },
    addData: (state, action) => {
      // let currentState;
      //get current state
      // currentState = JSON.parse(JSON.stringify(state));
      const newData = action.payload;
      // console.log(newData);
      state.data = [...state.data, newData];
      // console.log(state.data);
      state.openForm = false;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    deleteData: (state, action) => {
      const newData = [];
      let currentState = JSON.parse(JSON.stringify(state));
      currentState.data.forEach((element) => {
        if (element.id !== action.payload) {
          newData.push(element);
        }
      });
      state.data = newData;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    updateItem: (state, action) => {
      const newData = action.payload;
      let currentState = JSON.parse(JSON.stringify(state));
      const newList = currentState.data;
      const index = currentState.data.findIndex((e) => e.id == newData.id);
      newList[index] = newData;

      state.data = newList;
      localStorage.setItem("data", JSON.stringify(state.data));
      state.openForm = false;
    },
    getData: (state, action) => {
      state.itemUpdate = action.payload;
    },
    changeStatus: (state, action) => {
      const newData = action.payload;
      let currentState = JSON.parse(JSON.stringify(state));
      const newList = currentState.data;
      const index = newList.findIndex((e) => e.id == newData.id);
      if (newData.status === "0") {
        newList[index].status = "1";
      } else {
        newList[index].status = "0";
      }
      state.data = newList;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    filterData: (state, action) => {
      // const defaultData = JSON.parse(JSON.stringify(state.data));
      const defaultData = JSON.parse(localStorage.getItem("data")) || [];
      if (action.payload === "-1") {
        const newList = defaultData;
        state.data = [...newList];
      } else if (action.payload === "0") {
        const newList = defaultData.filter((item) => item.status == "0");
        state.data = [...newList];
      } else if (action.payload === "1") {
        const newList = defaultData.filter((item) => item.status == "1");
        state.data = [...newList];
      }
    },
    searchData: (state, action) => {
      const defaultData = JSON.parse(localStorage.getItem("data")) || [];
      const searchName = defaultData.filter((item) =>
        item.name.includes(action.payload)
      );
      state.data = [...searchName];
    },
    sortDataAZ: (state, action) => {
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
      });
      state.data = [...newList];
    },
    sortDataZA: (state, action) => {
      // get current state
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x > y) {
          return -1;
        }
      });
      state.data = [...newList];
      // console.log(newList);
    },
    sortStatus1: (state, action) => {
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.status.toLowerCase();
        if (x === "1") {
          return -1;
        }
      });
      state.data = [...newList];
    },
    sortStatus0: (state, action) => {
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.status.toLowerCase();
        if (x === "0") {
          return -1;
        }
      });
      state.data = [...newList];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setForm,
  addData,
  deleteData,
  getData,
  changeStatus,
  itemUpdate,
  updateItem,
  filterData,
  searchData,
  sortDataAZ,
  sortDataZA,
  sortStatus1,
  sortStatus0,
} = taskReducer.actions;

export default taskReducer.reducer;
