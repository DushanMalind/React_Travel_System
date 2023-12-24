// @ts-ignore
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";

function App() {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <BrowserRouter>
        <Routes>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/*" Component={DefaultLayout}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
