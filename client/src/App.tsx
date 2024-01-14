// @ts-ignore
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/page/login/Login";
import {SignIn} from "./view/page/signIn/SignIn";
import {Admin} from "./view/page/admin/Admin";
import {AdminDefaultLayout} from "./view/common/AdminDeafultLayout/AdminDefaultLayout";
import {AdminProduct} from "./view/page/adminProduct/AdminProduct";



function App() {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <BrowserRouter>
        <Routes>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/*" Component={DefaultLayout}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/sign" Component={SignIn}></Route>

          <Route path="/admin/*" Component={Admin}></Route>
          {/*<Route path="/addRoom" Component={AdminProduct}></Route>*/}



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
