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
import TacContent from "./components/TacContent";
import Boxx from "./components/Governance";
import Bod from "./components/Bod";
import History from "./components/History";
import Fellowship from "./components/Announcement/fellowship.js";
import Proposal from "./components/Announcement/proposal.js";
import ThrustArea from './components/ThrustArea'
import ForgotPassword from "./components/LoginRegister/ForgotPassword";
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
            path="/forgot-password"
            exact
            render={(props) => <ForgotPassword {...props} />}
          />
          <Route
            path="/incubation"
            exact="true"
            render={(props) => <Incubation {...props} />}
          />
          <Route
            path="/governance"
            exact
            render={(props) => <Boxx {...props} />}
          />
          <Route
            path="/board-of-directors"
            exact
            render={(props) => <Bod {...props} />}
          />
          <Route
            path="/thrust-area-coord"
            exact
            render={(props) => <TacContent {...props} />}
          />
          <Route
            path="/history-mission"
            exact
            render={(props) => <History {...props} />}
          />
         <Route
            path="/fellowship"
            exact
            render={(props)=><Fellowship {...props} />}
         />
         <Route
            path="/proposal"
            exact
            render={(props)=><Proposal {...props} />}
         />
         <Route
            path="/thrust-areas"
            exact="true"
            render={(props) => <ThrustArea {...props} />}
          />


          {/* If any routes are not matched with the URL */}
          {/* <Route path="*" component={NotFound} /> */}

       </Switch>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
