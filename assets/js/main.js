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
            throw new Error(
                `Failed to load component: ${filePath}`
            );
        }

        const content = await response.text();

        element.innerHTML = content;

    } catch (error) {

        console.error(
            'Component loading error:',
            error
        );

    }

}


/* --------------------------------------------------
   2. INITIALIZE NAVIGATION
   -------------------------------------------------- */

function initializeMenu() {

    const menuToggle =
        document.querySelector('.site-header__toggle');

    const navigation =
        document.querySelector('.site-header__navigation');

    if (!menuToggle || !navigation) {
        return;
    }


    menuToggle.addEventListener('click', () => {

        const isOpen =
            navigation.classList.toggle('is-open');

        menuToggle.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

    });

}


/* --------------------------------------------------
   3. CLOSE NAVIGATION
   -------------------------------------------------- */

function closeNavigation() {

    const menuToggle =
        document.querySelector('.site-header__toggle');

    const navigation =
        document.querySelector('.site-header__navigation');

    if (!menuToggle || !navigation) {
        return;
    }


    navigation.classList.remove('is-open');

    menuToggle.setAttribute(
        'aria-expanded',
        'false'
    );

}


/* --------------------------------------------------
   4. INITIALIZE NAVIGATION LINKS
   -------------------------------------------------- */

function initializeNavigationLinks() {

    const navigationLinks =
        document.querySelectorAll(
            '.site-header__link'
        );

    navigationLinks.forEach((link) => {

        link.addEventListener('click', () => {

            closeNavigation();

        });

    });

}


/* --------------------------------------------------
   5. INITIALIZE CURRENT PAGE
   -------------------------------------------------- */

function initializeCurrentPage() {

    const currentPath =
        window.location.pathname;

    const navigationLinks =
        document.querySelectorAll(
            '.site-header__link'
        );

    navigationLinks.forEach((link) => {

        const linkPath =
            new URL(
                link.href,
                window.location.origin
            ).pathname;

        if (linkPath === currentPath) {

            link.setAttribute(
                'aria-current',
                'page'
            );

        }

    });

}


/* --------------------------------------------------
   6. INITIALIZE SITE
   -------------------------------------------------- */

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


/* --------------------------------------------------
   7. DOM READY
   -------------------------------------------------- */

document.addEventListener(
    'DOMContentLoaded',
    initializeSite
);