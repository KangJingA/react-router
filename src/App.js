import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

// addition arguments
// browserrouter: basename="/tutorial" -> adds additonal path in front of url
// browserrouter: forceRefresh -> refresh route, rerender stuff
// getUserConfirmatin -> message + callback t0 run when user has changeg routes
function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
      </div>
      <div className="main">
        <button onClick={() => setLogin(!login)}>
          {!login ? "Logout" : "Login"}
        </button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile">
            {login ? <Redirect to="/" /> : <Profile />}
          </Route>
          <Route exact path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
