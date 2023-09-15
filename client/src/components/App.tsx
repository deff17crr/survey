import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import {routes} from "../routes";
import {store} from "../state";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={"w-10/12 m-auto"}>
          <nav className={'mt-5 mb-5 bg-indigo-100 border-b-2 border-indigo-400 rounded text-indigo-900 px-4 py-3 shadow-md'}>
            <Link to="/" className={"hover:opacity-75"}>Home</Link>
          </nav>

          <Routes>
            {routes.map((route, key) => (
              <Route key={key} path={route.url} Component={route.component} />
            ))}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}