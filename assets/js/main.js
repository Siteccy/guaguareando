/* ==================================================
   MAIN JAVASCRIPT
   Guaguareando Ando
   ================================================== */


/* --------------------------------------------------
   1. LOAD COMPONENT
   -------------------------------------------------- */

async function loadComponent(selector, filePath) {
    const element = document.querySelector(selector);

    if (!element) {
        return;
    }

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Failed to load component: ${filePath}`);
        }

        const content = await response.text();

        element.innerHTML = content;

    } catch (error) {
        console.error('Component loading error:', error);
    }
}


/*==================================================
=            MOBILE NAVIGATION
==================================================*/

function initializeMenu() {

    const menuToggle = document.querySelector('.site-header__toggle');
    const navigation = document.querySelector('.site-header__navigation');

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener('click', () => {

        const isOpen = navigation.classList.toggle('is-open');

        menuToggle.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

    });
}


function closeNavigation() {

    const menuToggle = document.querySelector('.site-header__toggle');
    const navigation = document.querySelector('.site-header__navigation');

    if (!menuToggle || !navigation) {
        return;
    }

    navigation.classList.remove('is-open');

    menuToggle.setAttribute(
        'aria-expanded',
        'false'
    );
}


function initializeNavigationLinks() {

    const navigationLinks =
        document.querySelectorAll('.site-header__link');

    navigationLinks.forEach((link) => {

        link.addEventListener('click', () => {

            closeNavigation();

        });

    });
}


/*==================================================
=            CURRENT PAGE
==================================================*/

function initializeCurrentPage() {

    const currentPath =
        window.location.pathname;

    const navigationLinks =
        document.querySelectorAll('.site-header__link');

    navigationLinks.forEach((link) => {

        const linkPath =
            new URL(
                link.href,
                window.location.origin
            ).pathname;


        /*
         * Exact page match
         */

        if (linkPath === currentPath) {

            link.setAttribute(
                'aria-current',
                'page'
            );

            return;
        }


        /*
         * All individual program pages
         * belong to the "Programas" section.
         */

        const isProgramPage =
            currentPath.startsWith('/programs/');

        const isProgramsLink =
            linkPath === '/programs.html';

        if (isProgramPage && isProgramsLink) {

            link.setAttribute(
                'aria-current',
                'page'
            );

        }

    });
}


/*==================================================
=            INITIALIZE SITE
==================================================*/

async function initializeSite() {

    await loadComponent(
        '#site-header',
        '/components/header.html'
    );

    await loadComponent(
        '#site-footer',
        '/components/footer.html'
    );

    initializeMenu();

    initializeNavigationLinks();

    initializeCurrentPage();

}


document.addEventListener(
    'DOMContentLoaded',
    initializeSite
);