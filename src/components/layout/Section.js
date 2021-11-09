import React from "react";
import styled from "styled-components";

const Container = styled.div`
	/* display: inline-block; */
	width: 100%;
	padding-top: 120px;
	padding-bottom: 80px;
	background-color: ${(props) => {
		switch (props.bgColor) {
			case "white":
				return props.theme.color.ui.white700;
			case "light":
				return props.theme.color.brand.secondary100;
			case "dark":
				return props.theme.color.brand.secondary900;
			case "gradientBlue":
				return props.theme.color.brand.gradient.blue;
			default:
				return null;
		}
	}};
	@media only screen and (max-width: 480px) {
		padding-top: 80px;
		padding-bottom: 48px;
	}
`;

const Section = ({ 
		children,
		className,
		bgColor,
		refObject
	}) => (
	<Container
		ref={refObject}
		className={className}
		bgColor={bgColor}
	>
		{children}
	</Container>
);

export default Section;
