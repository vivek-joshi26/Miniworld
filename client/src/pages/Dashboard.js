import React, { useEffect, useState } from "react";
import axios from "../common/axiosInstance";
import { useNavigate, useParams , Routes, Route} from "react-router-dom";
import NavBar from "../components/NavBar";
import {UserDetails} from "./UserDetails"
import { SearchScholarship } from "./SearchScholarship";
import { SearchScholarshipByText } from "./SearchScholarshipByText";
import {MyAppliedScholarships} from "./MyAppliedScholarships"
// import { CreateEvent } from "./createEvent";
// import { SearchEvent } from "./SearchEvent";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { EventDetail } from "../pages/EventDetail";
// import { MyEvents } from "./MyEvents";
// import { UserDetails } from "./UserDetails";
// import {Reports} from "./reports"
export const Dashboard = () => {
  useEffect(() => { }, []);

  return (
    <div>
      <NavBar />
      {/* <div
        sx={{ position: 'absolute', "z-index": 1 }}>
        <Routes>
        <Route path="/:emailId" exact element={<UserDetails />} />
          <Route path="/search-scholarships" exact element={<SearchEvent />} />
          <Route path="/create-event"  exact element={<CreateEvent />} />
          <Route path="/search-event/detail"  exact element={<EventDetail />} />
          <Route path="/my-applications" exact element={<MyEvents />} />
          <Route path="/reports" exact element={<Reports />} />
        </Routes>
      </div> */}

      <div
        sx={{ position: 'absolute', "z-index": 1 }}>
        <Routes>
        <Route path="/:emailId" exact element={<UserDetails />} />
        <Route path="/search-scholarships" exact element={<SearchScholarship />} />
        <Route path="/search-scholarships-byText" exact element={<SearchScholarshipByText />} />
        <Route path="/my-applications" exact element={<MyAppliedScholarships />} />
        </Routes>
      </div>

      
    </div>
  );
};
