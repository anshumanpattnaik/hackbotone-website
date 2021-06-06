var navContainer = document.querySelector('.nav-container');

let searchPlaceholder = "Search blog";

var mNavContainer = document.createElement('div');
mNavContainer.setAttribute('class', 'mobile-nav-container');

var mNavCloseContainer = document.createElement('div');
mNavCloseContainer.setAttribute('class', 'mobile-nav-close-container');

var mNavCloseIcon = document.createElement('img');
mNavCloseIcon.setAttribute('class', 'mobile-nav-close-icon')
mNavCloseIcon.src = '/static/images/ic_close.png';
mNavCloseContainer.appendChild(mNavCloseIcon);

var mNavMenuContainer = document.createElement('div');
mNavMenuContainer.setAttribute('class', 'mobile-nav-menu-container');

mNavContainer.appendChild(mNavCloseContainer);
mNavContainer.appendChild(mNavMenuContainer);

mNavCloseIcon.addEventListener('click', function (e) {
    navContainer.style.height = "4em";
    mNavContainer.style.display = 'none';
})

var mNavIcon = document.createElement('img');
mNavIcon.setAttribute('class', 'mobile-nav-icon')
mNavIcon.src = '/static/images/ic_menu.png';
navContainer.appendChild(mNavIcon);

mNavIcon.addEventListener('click', function (e) {
    navContainer.style.height = "100vh";
    mNavContainer.style.display = "flex";
})

var titleContainer = document.createElement('div');
titleContainer.setAttribute('class', 'app-title-container')

var title = document.createElement('span');
title.setAttribute('class', 'app-title');
title.innerHTML = HACKBOTONE;
titleContainer.appendChild(title);

title.addEventListener('click', function (e) {
    window.location.href = '/';
})

var mSearchIconContainer = document.createElement('div');
mSearchIconContainer.setAttribute('class', 'mobile-search-icon-container')

var mSearchIcon = document.createElement('img');
mSearchIcon.setAttribute('class', 'mobile-search-icon')
mSearchIcon.src = '/static/images/ic_search_white.png';
mSearchIconContainer.appendChild(mSearchIcon);

var mSearchContainer = document.createElement('div');
mSearchContainer.setAttribute('class', 'mobile-search-container')

var mSearchBackBtn = document.createElement('img');
mSearchBackBtn.setAttribute('class', 'mobile-search-back-btn');
mSearchBackBtn.src = '/static/images/ic_arrow_back.png';

var mSearchInput = document.createElement('input');
mSearchInput.setAttribute('class', 'mobile-search-input');
mSearchInput.placeholder = searchPlaceholder;

mSearchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        var input = document.querySelector('.mobile-search-input');
        searchBlog(input);
    }
})

mSearchContainer.appendChild(mSearchBackBtn);
mSearchContainer.appendChild(mSearchInput);

mSearchIcon.addEventListener('click', function (e) {
    titleContainer.style.display = 'none';
    mSearchIconContainer.style.display = 'none';
    mNavIcon.style.display = 'none';
    mSearchContainer.style.display = 'flex';
})

mSearchBackBtn.addEventListener('click', function (e) {
    titleContainer.style.display = 'flex';
    mSearchIconContainer.style.display = 'flex';
    mNavIcon.style.display = 'flex';
    mSearchContainer.style.display = 'none';
})

var searchContainer = document.createElement('div');
searchContainer.setAttribute('class', 'search-container');

var searchInputContainer = document.createElement('div');
searchInputContainer.setAttribute('class', 'search-input-container');

var searchInput = document.createElement('input');
searchInput.setAttribute('class', 'search-input');
searchInput.placeholder = searchPlaceholder;

searchInputContainer.appendChild(searchInput);
searchContainer.appendChild(searchInputContainer);

var searchBtnContainer = document.createElement('div');
searchBtnContainer.setAttribute('class', 'search-btn-container');

var searchBtn = document.createElement('img');
searchBtn.setAttribute('class', 'search-btn');
searchBtn.src = '/static/images/ic_search_white.png';
searchBtnContainer.appendChild(searchBtn);

searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
})

searchBtn.addEventListener('click', function (e) {
    var input = document.querySelector('.search-input');
    searchBlog(input);
})
searchContainer.appendChild(searchBtnContainer);

function searchBlog(input) {
    window.location.href = '/search/' + input.value;
}

var menuContainer = document.createElement('div');
menuContainer.setAttribute('class', 'menu-container');

fetchApi(NAV_MENU, 'GET', null).then(data => {
    data.map(item => {
        if (item != undefined) {
            var menuLabel = document.createElement('a');
            menuLabel.setAttribute('class', 'menu-label');
            menuLabel.innerHTML = item.label;
            menuLabel.href = item.path;
            menuContainer.appendChild(menuLabel);
        }

        var mMenuLabel = document.createElement('a');
        mMenuLabel.setAttribute('class', 'mobile-menu-label');
        mMenuLabel.innerHTML = item.label;
        mMenuLabel.href = item.path;
        mNavMenuContainer.appendChild(mMenuLabel);
    })
})

navContainer.appendChild(titleContainer);
navContainer.appendChild(mSearchIconContainer);
navContainer.appendChild(mSearchContainer);
navContainer.appendChild(searchContainer);
navContainer.appendChild(menuContainer);
navContainer.appendChild(mNavContainer);