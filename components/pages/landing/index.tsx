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
						<div className={'landing-container-cover'}>
							<div className={'landing-subtitle'}>
								{'설문지를 Excel 파일로 쉽고 간단한 변환'}
							</div>
							<div className={'landing-box'}>
								<img className={'landing-box-img'} src={trans} alt=""/>	
								<div className={'landing-box-detail'}>
									<div className={'landing-box-text'}>
										{'MSAS와 함께 클릭 한번으로 기존의 수작업을 쉽고 빠르게 끝내보세요'}
									</div>
									<Link to={'/transpage'} className={'trans-link'}>체험하기</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
    );
};

export default Landing;