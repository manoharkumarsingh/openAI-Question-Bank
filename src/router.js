import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import GenerateWithQuestion from "./components/Question/generateWithQuestion";
import App from "./App";

const RouterComp = () => {
  return (
    <div className="router-with-content">
      <div className="router-section">
        <Router>
          <Routes>
            <Route path="/" element={<GenerateWithQuestion />} />
            {/* <Route path="/" element={<App />} /> */}
            {/* <Route path="/generate" element={<GenerateWithQuestion />} /> */}
          </Routes>
        </Router>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default RouterComp;
