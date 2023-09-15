import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import "./App.css";
import {routes} from "../routes";

export const App = () => {
  return (
    <div className={"w-10/12 m-auto"}>
      <Router>
        <div>
          <nav className={'mt-5 mb-5 bg-indigo-100 border-b-2 border-indigo-400 rounded text-indigo-900 px-4 py-3 shadow-md'}>
            <Link to="/" className={"hover:opacity-75"}>Home</Link>
          </nav>

          <Routes>
            {routes.map(route => (
              <Route path={route.url} Component={route.component} />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}