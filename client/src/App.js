import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
// import loginPage from "./pages/loginPage/loginPage";
// import createAccount from "./pages/createAccount/createAccount";
// import kudoId from "./pages/kudoId/kudoId";
// import commentKudo from "./pages/commentKudo/commentKudo";
// import createKudo from "./pages/createKudo/createKudo";
import kudosPage from "./pages/kudosPage/kudosPage";
import createKudo from './pages/createKudo/createKudo';

export const API_KEY = "8805a904-196b-4285-8a8c-50e4dedaed47";
export const API_URL = 'http://localhost:8080';

function App() {
  return (
    <Router className="App">
      <Switch>
        {/* {loginPage} */}
        <Route path="/login" exact component="/login"></Route> 
        {/* {createAccount} */}
        <Route path="/create-account" exact component="/create-acount"></Route>
        
        <Route path="/" exact component={kudosPage}></Route> 
        {/* {kudoId} */}
        <Route path="/id" exact component="/:id"></Route> 
        {/* {commentKudo} */}
        <Route path="/comment" exact component="/comment"></Route>
        {/* {createKudo} */}
        <Route path="/create-kudo" exact component={createKudo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
