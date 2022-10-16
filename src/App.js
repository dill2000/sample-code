import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Components/Common/Home";
import HomeLogin from "./Components/Common/HomeLogin";
import Login from "./Components/Common/Login";
import Register from "./Components/Common/Register";
import MyAccount from "./Components/Common/MyAccount";
import AboutUS from "./Components/Common/AboutUS";






function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customer-home" exact component={HomeLogin} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/my-account" exact component={MyAccount} />
          <Route path="/about-us" exact component={AboutUS} />


          
            
          
            
          
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
