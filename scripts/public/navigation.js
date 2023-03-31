import { qsa } from '../utils';
/**
 * Navigation DOM manipulation.
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
		 * Navigation menu: add ancestor class to sub-menu page menu parents.
		 * Link checking and classing.
		 */
		const currentMenuItem = document.querySelector('.current-menu-item');

		if (currentMenuItem) {
			let parentUl = currentMenuItem.closest('ul');
			const currentAncestors = currentMenuItem.closest('ul').querySelectorAll('.current-menu-ancestor');
			const currentMenuItemAncestors = currentMenuItem.closest('ul').querySelectorAll('.current-menu-item > ul');

			// Add current-menu-ancestor class to parent li in chain
			if (currentMenuItemAncestors) {
				currentMenuItemAncestors.forEach(function (ancestor) {
					ancestor.classList.add('current-menu-ancestor');
				});
			}
			if (parentUl) {
				while (parentUl !== null && parentUl.classList.contains('wp-block-navigation__submenu-container')) {
					parentUl.parentNode.classList.add('current-menu-ancestor');
					parentUl = parentUl.parentNode.closest('ul');
				}
			}
			if (currentAncestors) {
				// Add current-menu-ancestor class to li containing current-menu-item's ul
				currentAncestors.forEach(function (ancestor) {
					ancestor.classList.add('current-menu-ancestor');
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