export interface SiteConfig {
	/** URL of the parent resource, used as the base of all resources */
	parentRoot: string;
	/** URL of the Argu-Site resource, which contains things like the menu bar */
	siteResource: string;
	/** URL of the Argu-Site resource, which contains things like the menu bar */
	homeUrl: string;
}

export const currentSiteConfig: SiteConfig = {
	siteResource: 'https://atomicdata.dev/wonenatthepark/site',
	parentRoot: 'https://atomicdata.dev/importer/l8mgzvvnm2a',
	homeUrl: 'https://atomicdata.dev/importer/l8mgzvvnm2a',
};
