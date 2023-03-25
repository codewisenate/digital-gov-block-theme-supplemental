/**
 * Flex cards DOM manipulation.
 * 
 * Note: as this runs on all pages be sure to null check all elements before use.
 * 
 * @return {void}
 */
const domReady = () => {
	/*
	 * SafarIE bug requires 0ms timeout.
	 */
	setTimeout(function () {

		/**
		 * Aggregation: Card setup. Used on Guidance, Policies and standards and other pages.
		 */
		const isFlexCards = document.querySelector('body.flex-cards');

		if (isFlexCards) {

			const flexCardGroup = document.querySelectorAll('.guidance-card');

			if (flexCardGroup) {
				flexCardGroup.forEach((group) => {

					const headline = group.querySelector('.card-title');
					if (headline) {
						const headlineLink = headline.querySelector('a');
						if (headlineLink) {
							const link = headlineLink.getAttribute('href');
							const linkWrapper = document.createElement('a');
							linkWrapper.href = link;
							group.parentNode.insertBefore(linkWrapper, group);
							linkWrapper.appendChild(group);
							headline.replaceChild(headlineLink.firstChild, headlineLink);
						}
					}

				});
			}
		}

	}, 0);
};

if ('complete' === document.readyState) {
	domReady();
} else {
	document.addEventListener('DOMContentLoaded', domReady);
}