import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';



export const AppRouter = () => {
    return (        
            <Router>
                <div>
                    <NavBar></NavBar>
                    <div className='container'>
                    <Switch>
                        <Route exact  path='/about' component={AboutScreen}></Route>
                        <Route exact path='/login' component={LoginScreen}></Route>
                        <Route exact path='/'  component={HomeScreen}></Route>
                        <Redirect to="/"></Redirect>
                    </Switch>
                    </div>
                    
                </div>
            </Router>        
    )
}
