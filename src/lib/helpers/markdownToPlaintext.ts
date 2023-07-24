export function markdownToPlainText(markdownString: string) {
	// Remove markdown characters
	let plainText = markdownString.replace(/#+/g, '');
	plainText = plainText.replace(/\*+/g, '');
	plainText = plainText.replace(/_+/g, '');
	plainText = plainText.replace(/`+/g, '');
	plainText = plainText.replace(/~+/g, '');

	// Remove links
	plainText = plainText.replace(/\[(.*?)\]\((.*?)\)/g, '$1');

	return plainText;
}
