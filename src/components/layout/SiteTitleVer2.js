import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Section from "./Section";
import LiveArea from "./LiveArea";
import handleViewport from 'react-in-viewport';
import { useTranslation } from 'react-i18next';

import ToTop from '../motion/ToTop';
import ViewportWrapper from "../ViewportWrapper";
import ImageBackground from "../videoBackground/ImageBackground";
import useWindowSize from '../../hook/useWindowSize';
import VideoBackground from "../videoBackground/VideoBackground";

import ic_scroll from "../../assets/icon/ic_keep_scroll.svg";


const Container = styled.div`
	width: calc(100% - 48px);
	margin-left: 24px;
	margin-right: 24px;
	height: calc(100% - 48px);
  max-height: 880px;
	border-radius: 8px;
	overflow: hidden;
	background-image: url(${props => props.img});
	background-size: cover;
  background-position: center;
	@media only screen and (max-width: 480px) {
		
	}
`;



const Blink = keyframes`
	0% {opacity: 0}
	100% {opacity: 1}
`;

const ButtonScroll = styled.div`
	width: 64px;
	height: 64px;
	position: absolute;
	left: calc(50% - 32px);
	bottom: 48px;
	animation: ${Blink} 2s ease-out 0s infinite;
	cursor: pointer;
	z-index: 99;
`;

const Button = styled.div`

	height: 48px;
	border-radius: 24px;
	padding:0 32px;
	background-color: ${props => props.theme.color.brand.epGreen};
	${props => props.theme.layout.flexColCenter}
	${props => props.theme.type.size.bttText};
	${props => props.theme.type.weight.prd.bold};
	margin-top: 24px;
	margin-bottom: 48px;
	color: #fff;
	cursor: pointer;
`;

const Content = styled(LiveArea)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const ViewportBlock = handleViewport(Container, /** options: {}, config: {} **/);

const ChapterMark = styled.p`
	text-align: center;
	${props => props.theme.type.size.chapterMark};
	opacity: 0.75;
	margin-bottom:24px;
`;

const Top = styled.div`
	text-align: center;
	width: 100%;
	${props => props.theme.layout.flexColCenter}
	padding-top: 80px;
	margin-bottom: 48px;
`;

const Title = styled.div`
	width: 50%;
	${props => props.theme.type.size.title}
	${props => props.theme.type.weight.exp.bold}
	text-transform: capitalize;
	text-shadow: 0 0 20px rgba(15, 30, 45, 0.34);
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;


const Exp = styled.div`
	position: relative;
	width: 50%;
	word-break: keep-all;
	${props => props.theme.type.size.title1}
	${props => props.theme.type.weight.prd.bold}
	text-align: left;
	margin-top: 12px;
	/* border: solid 1px #fff; */
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;


const SiteTitle = ({
	img,
	onClick
}) => {

	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		setIsLoad(true);
	}, []);

	const { t } = useTranslation();

	return (
		<Container img={img}>
			<ButtonScroll onClick={onClick}>
				<img src={ic_scroll} alt='' />
			</ButtonScroll>
			<Content>
				<Title>
					<ToTop
						isTrigger={isLoad}
						index={3}
						distance={'middle'}
					>
						PLASTIC <br />
						LITERACY
					</ToTop>
				</Title>
				<Exp>
					<ToTop
						isTrigger={isLoad}
						index={6}
						distance={'short'}
					>
						{t('title-subtitle')}
					</ToTop>
				</Exp>
				<ToTop
					isTrigger={isLoad}
					index={7}
					distance={'short'}
					style={{ alignItems: 'flex-start' }}
				>
					<Button onClick={onClick}>
						플라스틱 리터러시 알아보기
					</Button>
				</ToTop>
			</Content>
		</Container>
	)
}

export default SiteTitle;