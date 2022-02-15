import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
	width: calc(100%);
	/* margin-left: 24px;
	margin-right: 24px; */
	height: calc(100% - 16px);
	border-radius: 8px;
	overflow: hidden;
	background-image: url(${props => props.img});
	background-size: cover;
  background-position: center;
	position: relative;
	color: ${props => props.theme.color.brand.white};
	:before{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		background-color: rgba(0,0,0,0.64);
		z-index: 0;
		transition: background-color 0.4s;
		pointer-events: none;
	}
	.subtitle{
			display: none;
		}
	:hover{
		.title{
			display: none;
		}
		.subtitle{
			display: block;
		}
		:before{
			pointer-events: none;
			background-color: rgba(0,0,0,0.2);
		}
	}
	@media only screen and (max-width: 480px) {
		
	}
`;

const Content = styled(LiveArea)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0.9;
	:hover{
		.divider{
			width: 200px;
		}
	}
`;

const Title = styled.div`
	width: 100%;
	text-align: center;
	${props => props.theme.type.size.h2}
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
	${props => props.theme.type.size.title2}
	${props => props.theme.type.weight.exp.bold}
	text-transform: capitalize;
	text-shadow: 0 0 20px rgba(15, 30, 45, 0.34);
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Divider = styled.div`
	width: 24px;
	height: 4px;
	background-color: #fff;
	margin: 16px 0px;
	transition: width 0.4s;
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


const ChapterTitleLink = ({
	img,
	num,
	title,
	to,
	exp
}) => {

	return (
		<Container
			img={img}
		>
			<Link to={to}>
				<Content>
					<SubTitle>
						{`CHAPTER${num}`}
					</SubTitle>
					<Divider className="divider" />
					<Title className='title'>
						{title}
					</Title>
					<Title className='subtitle'>
						{exp}
					</Title>
				</Content>
			</Link>

		</Container>
	)
}

export default ChapterTitleLink;