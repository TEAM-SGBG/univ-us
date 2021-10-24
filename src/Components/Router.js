import React from "react";
import { HashRouter as BrouserRouter, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Interest from "Routes/Interest";
import Login from "Routes/Login";
import MyPage from "Routes/MyPage";
import SignUp from "Routes/SignUp";
import UserInfo from "Routes/UserInfo";
import { Redirect } from "react-router";

export default () =>{
    return(
        <BrouserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/interest">
                <Interest/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/mypage">
                <MyPage/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route exact path="/userinfo">
                <UserInfo/>
            </Route>
            <Redirect from="*" to="/" />
        </Switch>
        </BrouserRouter>
    )
}