const layout = {
	flexCol: `
		display:flex;
		flex-direction: column;
	`,
	flexRow: `
		display:flex;
		flex-direction: row;
	`,
	alginCenter: `
		align-items: center;
	`,
	spaceBetween: `
		justify-content: space-between;
	`,
	flexColCenter: `   
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`,
	flexRowCenter: `   
		display:flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`,
	flexRowCol: `  
		display: flex;
		flex-direction: row;
		@media only screen and (max-width: 480px) {
				flex-direction: column;
		}
	`,
};

export default layout;
