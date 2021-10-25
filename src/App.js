import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import HomePage from "./components/HomePage";
import { useState } from "react";
import { getFromLocalStorage } from "./utils/localStorage";
import UserContext from "./context/UserContext";
import InputEntry from "./components/InputEntry";
import OutputEntry from "./components/OutputEntry";

function App() {
  const [login, setLogin]= useState(getFromLocalStorage())
  

  return (
    <BrowserRouter>
      <UserContext.Provider value={{login,setLogin}}>
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
          <Route path="/input-entry" exact> 
              <InputEntry />
          </Route>
          <Route path="/output-entry" exact> 
              <OutputEntry/>
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
