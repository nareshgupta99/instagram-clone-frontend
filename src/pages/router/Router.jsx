import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Profile from "../profile/Profile";

function Router() {
  return (
    <div>
      <div className="flex">
        <div className="">

        <Sidebar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/username" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
