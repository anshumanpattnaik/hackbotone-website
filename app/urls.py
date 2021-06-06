from django.urls import re_path, path
from .views import *

urlpatterns = [
    path('', index),
    path('promotion-video/', promotionVideo),
    path('blogs/page/<int:page_no>', blogs),
    path('blog/<str:blog_id>/', blogDetails),
    path('search/<str:text>/', search),
    path('about/', about),
    path('footer/', footer)
]