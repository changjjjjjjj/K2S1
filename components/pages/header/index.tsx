import React from "react";
import "./header.css";
import {Link} from 'react-router-dom';

const logo =require("../../../assets/images/img-logo.png");

const Header: React.FC = () => {
    return (
					<div className={'header'}>
						<div className={'header-1200'}>
							<Link to={'/'}>
								<img className={'header-logo'} src={logo} alt="" />
							</Link>
							<Link to={'/login'} className={'header-login'}>{'로그인'}</Link>
							<Link to={'/Signup'} className={'header-signup'}>{'회원가입'}</Link>
						</div>
					</div>
    );
};

export default Header;