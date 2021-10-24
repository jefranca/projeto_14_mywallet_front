import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact> 
            <Login />
        </Route>
        <Route path="/sign-up" exact> 
            <SignUp />
        </Route>
        <Route path="/home" exact> 
            <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
