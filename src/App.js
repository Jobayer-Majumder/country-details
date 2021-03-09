import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/header/Header';
import Home from './component/Home/Home';
import NotFound from './component/notFound/NotFound';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ShowDetails from "./component/showDetails/ShowDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/home'>
            <Home />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/country/:countryName'>
            <ShowDetails />
        </Route>
        <Route path='*'>
            <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
