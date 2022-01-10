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
	height: 880px;
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


const SiteTitle = ({
	img
}) => {

	return (
		<Container img={img}>
			<Content>
				<Title>
					PLASTIC <br />
					LITERACY
				</Title>
				<Exp>
					GS칼텍스가 제안하는 플라스틱 리터러시는 무엇일까요?
				</Exp>
			</Content>
		</Container>
	)
}

export default SiteTitle;