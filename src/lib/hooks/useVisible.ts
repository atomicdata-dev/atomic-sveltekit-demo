type VisibleResult = {
	destroy: () => void;
};

export const useVisible = (
	node: HTMLElement,
	{
		root,
		onVisibleChange,
	}: { root?: HTMLElement; onVisibleChange: (isVisible: boolean) => void },
): VisibleResult => {
	const observer = new IntersectionObserver(
		entries => {
			const isIntersecting = entries.some(entry => entry.isIntersecting);
			onVisibleChange(isIntersecting);
		},
		{
			root,
			threshold: 0.4,
		},
	);

	observer.observe(node);

	return {
		destroy: () => observer.disconnect(),
	};
};
