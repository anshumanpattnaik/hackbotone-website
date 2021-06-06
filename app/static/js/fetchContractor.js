// API Endpoints
const BASE_URL = 'https://api.hackbotone.com';
const BLOGS_PAGE = '/blogs/page/1';
const PORTFOLIO = BASE_URL + '/api/v1/portfolio/me';
const YOUTUBE_VIDEO_API = BASE_URL + '/api/v1/youtube/latest';
const NAV_MENU = '/static/data/nav_menu.json';

async function fetchApi(url, method, data) {
    let context = {
        method: method,
        body: (method !== 'GET') ? JSON.stringify(data) : null,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }
    const response = await fetch(url, context)
    const json = await response.json();
    return json
}