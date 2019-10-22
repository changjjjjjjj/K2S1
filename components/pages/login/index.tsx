import React from "react";
import Header from "../header";
import "./login.css";

const trans = require("../../../assets/images/img-landing-trans.png");
const Login: React.FC = () => {
    return (
			<div className={'wrap'}>
				<Header/>
				<div className={'login-container'}>
					<input type={"email"} id={"mail"} name={"mail"} placeholder={"이메일"} autoCapitalize={"off"} className={"login-input"}/>
					<input type={"password"} id={"pwd"} name={"pwd"} placeholder={"비밀번호"} className={"login-input"}/>
					<input type={"submit"} title={"로그인"} value={"로그인"} className={"login-button"}/>
				</div>
			</div>
    );
};

export default Login;