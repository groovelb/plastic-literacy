import React from "react";
import styled from "styled-components";
import Section from "./Section";
import LiveArea from "../layout/LiveArea";

const Container = styled(Section)`
	min-height: ${window.innerHeight + 'px'};
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
`;

const ChapterMark = styled.p`
	width: 100%;
	${props => props.theme.type.size.chapterMark};
`;

const Top = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding-top: 80px;
	margin-bottom: 48px;
`;

const Title = styled.div`
	width: 50%;
	h1{
		${props => props.theme.type.size.h1}
		${props => props.theme.type.weight.exp.bold}
		margin-bottom: 16px;
	}
	h2{
		${props => props.theme.type.size.h2}
		${props => props.theme.type.weight.prd.light}
	}
`;

const Exp = styled.div`
	width: 50%;
	${props => props.theme.type.size.body2}
	${props => props.theme.type.weight.prd.light}
	margin-top: 12px;
`;

const Illust = styled.div`
	width: 100%;
	height: 480px;
	background-color: rgba(0,0,0,0.25);
`

const ChapterTitle = ({
	className,
	bgColor,
	title,
	subTitle,
	exp,
	colorMode
}) => (
		<Container
			className={className}
			bgColor={bgColor}
			colorMode={colorMode}
		>
			<LiveArea>
				<Top>
					<ChapterMark>
						CHAPTER1
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
		</Container>
	);

export default ChapterTitle;