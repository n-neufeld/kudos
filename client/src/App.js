import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
// import loginPage from "./pages/loginPage/loginPage";
// import createAccount from "./pages/createAccount/createAccount";
// import kudoId from "./pages/kudoId/kudoId";
// import commentKudo from "./pages/commentKudo/commentKudo";
// import createKudo from "./pages/createKudo/createKudo";
import kudosPage from "./pages/kudosPage/kudosPage";

export const API_KEY = "8805a904-196b-4285-8a8c-50e4dedaed47";

function App() {
  return (
    <Router className="App">
      <Switch>
        {/* {loginPage} */}
        <Route path="/" exact component="/"></Route> 
        {/* {createAccount} */}
        <Route path="/create-account" component="/"></Route>
        
        <Route path="/kudos" component={kudosPage}></Route> 
        {/* {kudoId} */}
        <Route path="/kudos/:id" exact component="/"></Route> 
        {/* {commentKudo} */}
        <Route path="/comment" exact component="/"></Route>
        {/* {createKudo} */}
        <Route path="/create-kudo" exact component="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
