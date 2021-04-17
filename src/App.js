import { BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from './components/Homepage'
import Startup from './components/Activity/Startup'
import SkillDev from './components/Activity/SkillDev'
import TechDev from './components/Activity/TechDev'
import InternationalCollab from './components/Activity/InternationalCollab'
import './App.css'
import RegisterPage from "./components/LoginRegister/RegisterPage";
import LoginPage from "./components/LoginRegister/LoginPage";
function App() {
  return (
    <BrowserRouter>
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
         


          {/* If any routes are not matched with the URL */}
          {/* <Route path="*" component={NotFound} /> */}

       </Switch>
    </BrowserRouter>
  );
}

export default App;
