import React from 'react';
import './App.css';
import Landing from "./components/pages/landing";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import {BrowserRouter as Router, Route} from 'react-router-dom';



const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Route exact={true} path={'/'} component={Landing}/>
				<Route exact={true} path={'/login'} component={Login}/>
				<Route exact={true} path={'/Signup'} component={Signup}/>
            </div>
        </Router>
    );
};

export default App;
