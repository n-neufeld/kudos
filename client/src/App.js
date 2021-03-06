import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
// import loginPage from "./pages/loginPage/loginPage";
// import createAccount from "./pages/createAccount/createAccount";
import KudoId from "./pages/Kudo";
// import commentKudo from "./pages/commentKudo/commentKudo";
// import createKudo from "./pages/createKudo/createKudo";
import KudosPage from "./pages/KudosPage";
import CreateKudo from './pages/CreateKudo';

export const API_KEY = "8805a904-196b-4285-8a8c-50e4dedaed47";
export const API_URL = 'http://localhost:8080';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={KudosPage}></Route> 
        {/* {kudoId} */}
        <Route path="/kudos/:id" exact component={KudoId}></Route> 
        {/* {commentKudo} */}
        <Route path="/comment" exact component="/comment"></Route>
        {/* {createKudo} */}
        <Route path="/create-kudo" exact component={CreateKudo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
