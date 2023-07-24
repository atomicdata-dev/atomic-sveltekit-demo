import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';
import postcssCustomMedia from 'postcss-custom-media';

export default {
	plugins: [
		// Only include props that are used in the app.
		postcssCustomMedia(),
		postcssJitProps(OpenProps),
	],
};
