import { mapRange } from '$lib/helpers/mapRange';

const buildTresholdList = (numSteps: number) => {
	const thresholds: number[] = [];
	for (let i = 1.0; i <= numSteps; i++) {
		const ratio = i / numSteps;
		thresholds.push(ratio);
	}
	thresholds.push(0);
	return thresholds;
};

export const scrollRatio = (
	node: HTMLElement,
	range?: [min: number, max: number],
) => {
	const observer = new IntersectionObserver(
		entries => {
			for (const entry of entries) {
				let ratio = entry.intersectionRatio;

				if (range) {
					ratio = mapRange(ratio, 0, 1, range[0], range[1]);
				}

				(entry.target as HTMLElement).style.setProperty('--ratio', `${ratio}`);
			}
		},
		{
			threshold: buildTresholdList(100),
		},
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		},
	};
};
