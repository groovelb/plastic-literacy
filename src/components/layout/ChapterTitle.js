import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Section from "./Section";
import LiveArea from "../layout/LiveArea";
import handleViewport from 'react-in-viewport';
import ToTop from '../motion/ToTop';
import ViewportWrapper from "../ViewportWrapper";
import ImageBackground from "../../components/videoBackground/ImageBackground";


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

const DrawTop = keyframes`
	0%{width: 0%}
	100%{width: 100%}
`;

const DrawRight = keyframes`
	0%{height: 0%}
	100%{height: 100%}
`;

const DrawBottom = keyframes`
	0%{width: 0%; left: 100%}
	100%{width: 100%; left: 0%}
`;

const DrawLeft = keyframes`
	0%{height: 0%; top: 100%}
	100%{height: 100%; top: 0%}
`;


const duration = 0.5;

const BorderTop = styled.div`
	position: absolute;
	top:0;
	left:0;
	width: 0px;
	height: 1px;
	background-color: #fff;
	animation: ${props => props.isTrigger ? DrawTop : 'none'} ${`${duration}s`} linear forwards;
	animation-iteration-count: 1;
	animation-delay:  ${`${duration*1}s`};
`;
const BorderRight = styled.div`
	position: absolute;
	top:0;
	right:0;
	width: 1px;
	height: 0px;
	background-color: #fff;
	animation: ${props => props.isTrigger ? DrawRight : 'none'} 0.25s linear forwards;
	animation-iteration-count: 1;
	animation-delay: ${`${duration*2}s`};
`;
const BorderBottom = styled.div`
	position: absolute;
	top:calc(100% - 1px);
	left:0;
	height: 1px;
	width: 0px;
	background-color: #fff;
	animation: ${props => props.isTrigger ? DrawBottom : 'none'} 0.25s linear forwards;
	animation-iteration-count: 1;
	animation-delay: ${`${duration*3}s`};
`;
const BorderLeft = styled.div`
	position: absolute;
	top:0;
	left:0;
	height: 0px;
	width: 1px;
	background-color: #fff;
	animation: ${props => props.isTrigger ? DrawLeft : 'none'} 0.25s linear forwards;
	animation-iteration-count: 1;
	animation-delay: ${`${duration*4}s`};
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
	/* border: solid 1px #fff; */
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
	isTrigger,
	img
}) => {

	const [isTitleOn, setIsTitleOn] = useState(false);
	const [isExpOn, setIsExpOn] = useState(true);

	return (
		<>
			<ImageBackground
				isFilter={true}
				isTrigger={isTitleOn}
				img={img}
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
								<Exp isTrigger={isExpOn}>
									<BorderTop isTrigger={isExpOn} />
									<BorderRight isTrigger={isExpOn} />
									<BorderBottom isTrigger={isExpOn} />
									<BorderLeft isTrigger={isExpOn} />
									{exp}
								</Exp>
							</Top>
							{/* <Illust /> */}
						</LiveArea>
					</ViewportWrapper>
				{/* </ToTop> */}
			</Container>
		</>
	)
}

export default ChapterTitle;