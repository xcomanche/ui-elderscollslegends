import React, { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Context, initialState, reducer } from "./stores/Search";

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <Router>
          <Header />
          <React.Fragment>
            <CssBaseline />
            <Typography component="div" className="content">
              <Route exact path="/" component={HomePage} />
            </Typography>
          </React.Fragment>
        </Router>
      </div>
    </Context.Provider>
  );
}

render(<App />, document.querySelector("#app"));
