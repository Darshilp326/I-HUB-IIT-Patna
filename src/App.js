import { BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
       <Switch>
          <Route
            path="/"
            exact="true"
            render={(props) => <Homepage {...props} />}
          />
        


          {/* If any routes are not matched with the URL */}
          {/* <Route path="*" component={NotFound} /> */}

       </Switch>
    </BrowserRouter>
  );
}

export default App;
