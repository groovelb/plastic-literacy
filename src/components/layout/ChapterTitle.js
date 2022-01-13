import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Section from "./Section";
import LiveArea from "../layout/LiveArea";
import handleViewport from 'react-in-viewport';
import ToTop from '../motion/ToTop';
import ViewportWrapper from "../ViewportWrapper";
import ImageBackground from "../../components/videoBackground/ImageBackground";
import useWindowSize from '../../hook/useWindowSize';
import VideoBackground from "../videoBackground/VideoBackground";


const Container = styled(Section)`
	min-height: ${window.innerHeight + 'px'};
	margin-top: 80px;
	margin-bottom: 120px;
	${props => props.theme.layout.flexColCenter}
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
	text-align: center;
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
	position: relative;
	width: 75%;
	${props => props.theme.type.size.body1}
	${props => props.theme.type.weight.prd.light}
	text-align: left;
	margin-top: 12px;
	padding: 48px;
	transition: opacity 1s ease-in-out;
	border: solid 8px #fff;
	/* border: solid 1px #fff; */
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const ScrollGuide = styled.div`
	/* position: fixed; */
	width: 200px;
	height: 200px;
	${props => props.theme.layout.flexColCenter}
	top: calc(50% - 100px);
	left: calc(50% - 100px);
	opacity: ${props => props.isTrigger?0:1};
`;

const ChapterTitle = ({
	className,
	bgColor,
	title,
	subTitle,
	exp,
	colorMode,
	numChapter,
	src,
}) => {

	const [isTitleOn, setIsTitleOn] = useState(false);
	const [isExpOn, setIsExpOn] = useState(true);

	const windowSize = useWindowSize();

	return (
		<>
			<VideoBackground
				isTrigger={isTitleOn}
				isVideoPlay={true}
				width={windowSize.width}
				height={windowSize.height}
				isFilter={true}
				videoSrc={src}
			/>
			<Container
				className={className}
				bgColor={bgColor}
				colorMode={colorMode}
			>
				{/* <ToTop
					isTrigger={isTrigger}
					index={0}
				> */}
				{/* <ScrollGuide isTrigger={isTitleOn}>
					keep scroll
				</ScrollGuide> */}
				<LiveArea>
					<ViewportWrapper
						onEnterViewport={() => {
							setIsTitleOn(true);
							console.log('enter');
						}}
						onLeaveViewport={() => {
							setIsTitleOn(false);
							console.log('leave');
						}}
					>
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
						{/* <Illust /> */}
					</ViewportWrapper>
				</LiveArea>
				{/* </ToTop> */}
			</Container>
		</>
	)
}

export default ChapterTitle;