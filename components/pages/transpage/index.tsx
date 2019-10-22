import React from "react";
import Header from '../header';
import "./transpage.css";
import {Link} from 'react-router-dom';

const trans = require("../../../assets/images/img-landing-trans.png");

const Transpage: React.FC = () => {
    return (
				<div className={'wrap'}>
					<Header/>
					<div className={'landing-container'}>
						<div className={'landing-box'}>
							<div className={'trans-target'}>
								{'+'}
							</div>
							<img className={'trans-box-img'} src={trans} alt=""/>
							<div className={'trans-complete'}>
								{'내 컴퓨터에 저장하기'}
							</div>
						</div>
					</div>
				</div>
    );
};

export default Transpage;