import React from "react";
import './signup.css';
import Header from '../header';

const Signup: React.FC = () => {
    return (
	<div className={"wrap"}>
		<Header/>
        <div className={"signup-sentence"}>
			<p>회원가입</p>
		</div>
		<div className={"signup-box"}>
			<input type={"text"} id={"mail"} name={"mail"} placeholder={"이메일"} autoComplete={"new-password"} autoCapitalize={"off"} className={"signup-input"}/>
			<input type={"password"} id={"pwd"} name={"pwd"} placeholder={"비밀번호"} autoComplete={"new-password"} className={"signup-input"}/>	
			<input type={"password"} id={"pwd_confirm"} name={"pwd_confirm"} placeholder={"비밀번호 확인"} className={"signup-input"}/>		
			<input type={"submit"} title={"가입"} value={"가입"} className={"signup-button"}/>
		</div>
	</div>
    );
};

export default Signup;