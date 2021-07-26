import "./App.css";
import Whole from "./components/Whole/Whole";
import api from "./config/axios";

function App() {
  api
    .get("/user/user/60fc470820f0124cb79793d0")
    .then((res) => console.log(res));
  return (
    <div className="App">
      <Whole />
    </div>
  );
}

export default App;
