import { currentSiteConfig } from './../siteConfigs';
export const constructArticleUrl = (subject: string): string => {
	if (subject === currentSiteConfig.siteResource) return '/';

	const path = subject.replace(currentSiteConfig.siteResource, '');

	if (path === '') return '/';

	return path;
};
