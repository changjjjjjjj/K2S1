import React from "react";
import Header from '../header';
import "./landing.css";
import {Link} from 'react-router-dom';

const trans = require("../../../assets/images/img-landing-trans.png");

const Landing: React.FC = () => {
    return (
				<div className={'wrap'}>
					<Header/>
					<div className={'landing-container'}>
						<div className={'landing-subtitle'}>
							{'설문지를 Excel 파일로 쉽고 간단한 변환'}
						</div>
						<div className={'landing-box'}>
							<img className={'landing-box-img'} src={trans} alt=""/>	
							<div className={'landing-box-detail'}>
								<div className={'landing-box-text'}>
									{'설명 문구 추가'}
								</div>
								<div className={'trans-link'}>변환하기</div>
							</div>
						</div>
					</div>
				</div>
    );
};

export default Landing;