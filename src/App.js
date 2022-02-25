import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
//import Login from "pages/Login";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Dashboard from "components/Dashboard/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Dashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
