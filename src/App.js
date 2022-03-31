// import logo from "./logo.svg";
import './App.css';
import './demo.css';
import { Form } from './components/Form';
import { ButtonAdd } from './components/ButtonAdd';
import { Find } from './components/Find';
import { Sort } from './components/Sort';
import { List } from './components/List';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const state = useSelector((state) => state.taskReducer);
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr></hr>
      </div>

      <div className="row">
        {state.openForm ? (
          <div className={'col-xs-4 col-sm-4 col-md-4 col-lg-4'}>
            <Form />
          </div>
        ) : null}

        <div className={state.openForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : ''}>
          <ButtonAdd />
          <div className="row mt-15">
            <Find />
            <Sort />
          </div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
