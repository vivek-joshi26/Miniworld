import Auth from "./Auth";
import Provider_login from "./Provider_login";
import Student from "./Student_profile";
import Home from "./Home";
import { Routes , Route, Router} from 'react-router-dom';
import Student_home from "./Student_home";
import Available_scholarships from "./Available_scholarships"
import Scholarship_register from './Scholarship_register'
import Apply_scholarship from "./Apply_scholarship";
import Get_applications from "./Get_applications";
import Update_scholarship from "./Update_scholarship";

function App(){

  return(
    <div>
      <Home></Home>
      {/* <Student_home></Student_home> */}
      {/* <Available_scholarships></Available_scholarships> */}
      {/* <Apply_scholarship></Apply_scholarship> */}
      
      {/* <Scholarship_register></Scholarship_register> */}
      {/* <Get_applications> </Get_applications> */}
      {/* <Update_scholarship></Update_scholarship> */}

    </div>
  )
}

export default App;
