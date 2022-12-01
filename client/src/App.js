
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          {/* <Route path="register/:emailId" element={<SignUp />} />
          <Route path="redirect/:emailId" element={<Redirect />} />
          <Route path="*" element={<NotFound/>} />
          <Route element={<ProtectedRoutes />}> */}
          {/* <Route path="home/*" element={<Dashboard />}>
          </Route> */}
        
         <Route path="home/*" element={<Dashboard />} />
        </Routes>
      </Router>
    
  );
}

export default App;