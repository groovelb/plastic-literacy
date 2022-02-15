import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Section from "./Section";
import LiveArea from "./LiveArea";
import handleViewport from 'react-in-viewport';
import ToTop from '../motion/ToTop';
import ViewportWrapper from "../ViewportWrapper";
import ImageBackground from "../videoBackground/ImageBackground";
import useWindowSize from '../../hook/useWindowSize';
import VideoBackground from "../videoBackground/VideoBackground";

import ic_scroll from "../../assets/icon/ic_keep_scroll_white.svg";


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
	position: relative;
	:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.isFilter ? 'rgba(0,0,0,0.48)' : 'rgba(0,0,0,0)'};
    /* background-color: ${props => props.isFilter ? 'rgba(0,48,24,0.64)' : 'rgba(0,0,0,0)'}; */
  }
	*{
		z-index: 9;
	}
	@media only screen and (max-width: 480px) {
		
	}
`;

const Content = styled(LiveArea)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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

const Title = styled.div`
	width: 100%;
	text-align: center;
	${props => props.theme.type.size.chapterTitle}
	${props => props.theme.type.weight.exp.bold}
	text-transform: capitalize;
	text-shadow: 0 0 20px rgba(15, 30, 45, 0.34);
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const SubTitle = styled.div`
	width: 100%;
	text-align: center;
	${props => props.theme.type.size.h1}
	${props => props.theme.type.weight.exp.regular}
	text-transform: capitalize;
	text-shadow: 0 0 20px rgba(15, 30, 45, 0.34);
	span{
		${props => props.theme.type.weight.exp.regular}
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Divider = styled.div`
	width: 160px;
	height: 4px;
	background-color: #fff;
	margin: 24px 0px;
`;


const Exp = styled.div`
	position: relative;
	width: 800px;
	${props => props.theme.type.size.title2}
	${props => props.theme.type.weight.prd.bold}
	text-align: left;
	margin-top: 12px;
	/* border: solid 1px #fff; */
	margin-top: 80px;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;


const ChapterTitle = ({
	img,
	num,
	title,
	subTitle,
	exp,
	onClick,
	isFilter
}) => {

	return (
		<Container
			img={img}
			isFilter={isFilter}
		>
			<ButtonScroll onClick={onClick}>
				<img src={ic_scroll} alt='' />
			</ButtonScroll>
			<Content>
				<Title>
					{`${title}`}
				</Title>
				<Divider />
				<SubTitle>
					<span>
						❝
					</span>
					{` ${subTitle} `}
					<span>
						❞
					</span>
				</SubTitle>
				<Exp>
					{exp}
				</Exp>
			</Content>
		</Container>
	)
}

export default ChapterTitle;