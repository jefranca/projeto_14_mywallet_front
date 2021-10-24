import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp"

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
