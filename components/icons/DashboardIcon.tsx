const DashboardIcon = ({ style, ...restOfProps }: React.SVGProps<SVGSVGElement>) => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...restOfProps}
	>
		<path
			d="M8.83333 15.5V7.16667H15.5V15.5H8.83333ZM0.5 8.83333V0.5H7.16667V8.83333H0.5ZM5.5 7.16667V2.16667H2.16667V7.16667H5.5ZM0.5 15.5V10.5H7.16667V15.5H0.5ZM2.16667 13.8333H5.5V12.1667H2.16667V13.8333ZM10.5 13.8333H13.8333V8.83333H10.5V13.8333ZM8.83333 0.5H15.5V5.5H8.83333V0.5ZM10.5 2.16667V3.83333H13.8333V2.16667H10.5Z"
			style={{ fill: style?.fill }}
		/>
	</svg>
);

export default DashboardIcon;
