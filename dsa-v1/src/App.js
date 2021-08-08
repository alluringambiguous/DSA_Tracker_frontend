import "./App.css";
import Whole from "./components/Whole/Whole";
import { Landingpage } from "./components/LandingPage/Landingpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import api from "./config/axios";

function App() {
  // api
  //   .get("/user/user/60fc470820f0124cb79793d0")
  //   .then((res) => console.log(res))
  //   .catch((err) => {
  //     console.log(err);
  //   });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Whole} />
          <Route exact path="/LandingPage" component={Landingpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
