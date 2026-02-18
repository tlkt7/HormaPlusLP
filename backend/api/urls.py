from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.contact_message, name='contact'),
    path('health/', views.health_check, name='health'),
]
