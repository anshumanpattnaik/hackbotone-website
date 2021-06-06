import requests
from json import dumps
from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_sameorigin
from dateutil import parser

base_url = 'https://api.hackbotone.com'
api_version = '/api/v1'

fb_id = '308814687516412'
article_publisher = 'https://www.facebook.com/hackbotone'
article_author = 'https://www.facebook.com/anshuman.pattnaik.12'
site_name = 'HackbotOne'
site_url = 'https://hackbotone.com'
keywords = 'seo, hackbotone, web development, python, website, django, full-stack, cybersecurity, bug bounty, full-stack-application, web-security, webapplication'
author = 'Anshuman Pattnaik'
twitter_username = '@anspattnaik'
favicon = 'https://assets.hackbotone.com/assets/favicon.ico'
description = 'A Platform to showcase open source projects related to Application Security & Software Development and demonstrating the implementation behind every project through write-ups and youtube videos.'
seo_thumbnail = 'https://assets.hackbotone.com/assets/hackbotone_banner/hackbotone_banner.png'
domain_url = 'https://hackbotone.com/blog'
fb_share_url = f'https://www.facebook.com/sharer/sharer.php?u={domain_url}'
tw_share_url = f'http://twitter.com/share?url={domain_url}'
li_share_url = f'https://www.linkedin.com/sharing/share-offsite/?url={domain_url}'
wh_share_url = f'https://api.whatsapp.com/send?text={domain_url}'


def index(request):
    response = requests.get(f'{base_url}{api_version}/blogs/featured-board')
    blogs = response.json()
    blogs_list = blogs['results']
    context = {
        'site_name': site_name,
        'site_url': site_url,
        'seo_keywords': keywords,
        'author': author,
        'fb_id': fb_id,
        'article_publisher': article_publisher,
        'article_author': article_author,
        'twitter_username': twitter_username,
        'favicon': favicon,
        'title': 'HackbotOne | Exploring Application Security & Software Development',
        'description': description,
        'seo_thumbnail': seo_thumbnail,
        'blogs': blogs_list
    }
    return render(request, 'index.html', context)


def blogs(request, page_no):
    response = requests.get(f'{base_url}{api_version}/blogs/list?page={page_no}')
    if response.status_code == 200:
        blogs = response.json()
        blogs_list = blogs['results']
        context = {
            'site_name': site_name,
            'site_url': site_url,
            'seo_keywords': keywords,
            'author': author,
            'fb_id': fb_id,
            'article_publisher': article_publisher,
            'article_author': article_author,
            'twitter_username': twitter_username,
            'favicon': favicon,
            'title': 'HackbotOne | Blogs',
            'description': description,
            'seo_thumbnail': seo_thumbnail,
            'fb_share': fb_share_url,
            'tw_share': tw_share_url,
            'li_share': li_share_url,
            'wh_share': wh_share_url,
            'total_pages': blogs['total_pages'],
            'current_page': page_no,
            'search_page': False,
            'blogs': blogs_list
        }
        return render(request, 'blogs.html', context)
    else:
        return render(request, '404.html')


def blogDetails(request, blog_id):
    response = requests.get(f'{base_url}{api_version}/blogs/{blog_id}')
    if response.status_code == 200:
        blog = response.json()
        context = {
            'site_name': blog['title'],
            'site_url': f'{site_url}/blog/{blog_id}/',
            'seo_keywords': keywords,
            'author': author,
            'fb_id': fb_id,
            'article_publisher': article_publisher,
            'article_author': article_author,
            'twitter_username': twitter_username,
            'favicon': favicon,
            'blog_id': blog_id,
            'title': blog['title'],
            'seo_thumbnail': blog['seo_thumbnail'],
            'small_thumbnail': blog['small_thumbnail'],
            'thumbnail': blog['thumbnail'],
            'author': blog['author'],
            'published_date': blog['published_date'],
            'last_updated_date': blog['last_updated_date'],
            'keywords': blog['keywords'],
            'highlights': blog['highlights'],
            'description': blog['description'],
            'visibility': blog['visibility'],
            'is_featured': blog['is_featured'],
            'featured': blog['featured'],
            'fb_share': fb_share_url,
            'tw_share': tw_share_url,
            'li_share': li_share_url,
            'wh_share': wh_share_url,
        }
        if blog['visibility'] == True:
            return render(request, 'blogs-details.html', context)
    else:
        return render(request, '404.html')


def search(request, text):
    response = requests.get(f'{base_url}{api_version}/blogs/search/?q={text}')
    if response.status_code == 200:
        blogs = response.json()
        blogs_list = blogs['results']
        context = {
            'site_name': site_name,
            'site_url': site_url,
            'seo_keywords': keywords,
            'author': author,
            'fb_id': fb_id,
            'article_publisher': article_publisher,
            'article_author': article_author,
            'twitter_username': twitter_username,
            'favicon': favicon,
            'title': 'HackbotOne | Blogs',
            'description': description,
            'seo_thumbnail': seo_thumbnail,
            'fb_share': fb_share_url,
            'tw_share': tw_share_url,
            'li_share': li_share_url,
            'wh_share': wh_share_url,
            'search_text': text,
            'search_page': True,
            'blogs': blogs_list
        }
        return render(request, 'blogs.html', context)


def about(request):
    response = requests.get(f'{base_url}{api_version}/portfolio/me')
    if response.status_code == 200:
        data = response.json()
        context = {
            'site_name': site_name,
            'site_url': site_url,
            'seo_keywords': keywords,
            'author': author,
            'fb_id': fb_id,
            'article_publisher': article_publisher,
            'article_author': article_author,
            'twitter_username': twitter_username,
            'favicon': favicon,
            'title': 'HackbotOne | About',
            'description': description,
            'seo_thumbnail': seo_thumbnail,
            'about_me': data['about_me'],
            'profile_picture': data['profile_picture']
        }
        return render(request, 'about.html', context)
    else:
        return render(request, '404.html')


@xframe_options_sameorigin
def promotionVideo(request):
    return render(request, 'promotion-video.html')


@xframe_options_sameorigin
def footer(request):
    return render(request, 'footer.html')
