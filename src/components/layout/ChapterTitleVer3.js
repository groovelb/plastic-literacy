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


const Container = styled.div`
	width: calc(100% - 48px);
	margin-left: 24px;
	margin-right: 24px;
	height: calc(100% - 48px);

	border-radius: 8px;
	overflow: hidden;
	background-image: url(${props => props.img});
	background-size: cover;
  background-position: center;
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

const Divider = styled.div`
	width: 160px;
	height: 4px;
	background-color: #fff;
	margin: 28px 0px;
`;


const Exp = styled.div`
	position: relative;
	width: 75%;
	${props => props.theme.type.size.title1}
	${props => props.theme.type.weight.prd.bold}
	text-align: left;
	margin-top: 12px;
	/* border: solid 1px #fff; */
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;


const ChapterTitle = ({
	img,
	num,
	title
}) => {

	return (
		<Container img={img}>
			<Content>
				<Title>
				{`CHAPTER${num}`}
				</Title>
				<Divider />
				<Title>
				{title}
				</Title>
			</Content>
		</Container>
	)
}

export default ChapterTitle;