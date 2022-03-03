import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	/* display: table; */
	width: ${(props) => props.theme.size.liveArea};
	margin-left: auto;
	margin-right: auto;
	@media only screen and (max-width: 825px) {
		width: 100%;
		padding: 0 20px;
	}
`;

const LiveArea = ({
		children,
		className,
	}) => (
	<Container className={className}>{children}</Container>
);

export default LiveArea;
