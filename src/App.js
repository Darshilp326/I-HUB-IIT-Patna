import { BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from './components/Homepage'
import Startup from './components/Activity/Startup'
import SkillDev from './components/Activity/SkillDev'
import TechDev from './components/Activity/TechDev'
import InternationalCollab from './components/Activity/InternationalCollab'
import Footer from '../src/components/Footer/Footer'
import Navbar from '../src/components/Navbar/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from "./components/LoginRegister/RegisterPage";
import LoginPage from "./components/LoginRegister/LoginPage";
import Incubation from "./components/Incubation";
function App() {
  return (
  
    <BrowserRouter>
       <Navbar/>
       <Switch>
          <Route
            path="/"
            exact="true"
            render={(props) => <Homepage {...props} />}
          />
          <Route
            path="/startup"
            exact="true"
            render={(props) => <Startup {...props} />}
          />
          <Route
            path="/skill-human-resource-development"
            exact="true"
            render={(props) => <SkillDev {...props} />}
          />
          <Route
            path="/technology-development"
            exact="true"
            render={(props) => <TechDev {...props} />}
          />
          <Route
            path="/international-collab"
            exact="true"
            render={(props) => <InternationalCollab {...props} />}
          />
          <Route
            path="/login"
            exact
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            path="/register"
            exact
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/incubation"
            exact="true"
            render={(props) => <Incubation {...props} />}
          />
         


          {/* If any routes are not matched with the URL */}
          {/* <Route path="*" component={NotFound} /> */}

       </Switch>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
