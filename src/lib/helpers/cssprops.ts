export const cssProps = (props: Record<string, string | undefined>): string => {
	return Object.entries(props)
		.map(([key, value]) => (value !== undefined ? `--${key}: ${value};` : null))
		.filter(v => v !== null)
		.join(' ');
};
