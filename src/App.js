import { BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from './components/Homepage'
<<<<<<< HEAD
import Startup from './components/Activity/Startup'
import SkillDev from './components/Activity/SkillDev'
import TechDev from './components/Activity/TechDev'
import InternationalCollab from './components/Activity/InternationalCollab'
import './App.css'
=======
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> 717e1fcf8590ab2f367e34579c8d4c4fb7bc2e0e
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
         


          {/* If any routes are not matched with the URL */}
          {/* <Route path="*" component={NotFound} /> */}

       </Switch>
    </BrowserRouter>
  );
}

export default App;
