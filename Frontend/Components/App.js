import Auth from "./Auth";
import Provider_login from "./Provider_login";
import Student from "./Student_profile";
import Home from "./Home";
import { Routes , Route, Router} from 'react-router-dom';
import navigation from "./Navigation";
import Student_home from "./Student_home";

function App(){

  return(
    <div>
      <Home></Home>
      {/* <Student></Student> */}
      {/* <available_scholarships></available_scholarships> */}
      {/* <Student_home></Student_home> */}
      
    </div>
  )
}

export default App;