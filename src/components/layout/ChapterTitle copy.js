import React, { useState } from "react";
import styled from "styled-components";
import Section from "./Section";
import LiveArea from "../layout/LiveArea";
import handleViewport from 'react-in-viewport';
import ToTop from '../motion/ToTop';
import ViewportWrapper from "../ViewportWrapper";


const Container = styled(Section)`
	min-height: ${window.innerHeight + 'px'};
	margin-top: 80px;
	margin-bottom: 120px;
	color: ${(props) => {
		switch (props.bgColor) {
			case "dark":
				return props.theme.color.ui.white700;
			case "light":
				return props.theme.color.ui.strong;
			default:
				return null;
		}
	}};
	@media only screen and (max-width: 480px) {
		
	}
`;

const ViewportBlock = handleViewport(Container, /** options: {}, config: {} **/);

const ChapterMark = styled.p`
	width: 100%;
	${props => props.theme.type.size.chapterMark};
	opacity: 0.75;
	margin-bottom:24px;
`;

const Top = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding-top: 80px;
	margin-bottom: 48px;
`;

const Title = styled.div`
	width: 50%;
	h1{
		${props => props.theme.type.size.h1}
		${props => props.theme.type.weight.exp.bold}
		text-transform: capitalize;
		/* margin-bottom: 16px; */
	}
	h2{
		${props => props.theme.type.size.h2}
		${props => props.theme.type.weight.prd.light}
		margin-bottom:48px;
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Exp = styled.div`
	width: 50%;
	${props => props.theme.type.size.body2}
	${props => props.theme.type.weight.prd.light}
	margin-top: 12px;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Illust = styled.div`
	width: 100%;
	height: 480px;
	background-color: rgba(0,0,0,0.25);
	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 240px;
	}
`

const ChapterTitle = ({
	className,
	bgColor,
	title,
	subTitle,
	exp,
	colorMode,
	numChapter,
	isTrigger
}) => {

	return(
		<Container
			className={className}
			bgColor={bgColor}
			colorMode={colorMode}
			// onEnterViewport={() => {
			// 		console.log("enter");
			// 		setIsTrigger(true);
			// 	}}
			// onLeaveViewport={() => {}}
		>
			<ToTop
				isTrigger={isTrigger}
				index={0}
			>
				<LiveArea>
					<Top>
						<ChapterMark>
							{`CHAPTER${numChapter}`}
						</ChapterMark>
						<Title>
							<h1>
								{title}
							</h1>
							<h2>
								{subTitle}
							</h2>
						</Title>
						<Exp>
							{exp}
						</Exp>
					</Top>
					<Illust />
				</LiveArea>
			</ToTop>
		</Container>
	)
}

export default ChapterTitle;