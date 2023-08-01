from django.urls import path, re_path
from . import views
from .views import EmployeView
# PerfilView
from rest_framework_simplejwt import views as jwt_views


from .views import (
    CustomProviderAuthView,
    CustomTokenObtainPairView,
    CustomTokenRefreshView,
    CustomTokenVerifyView,
    LogoutView
)


urlpatterns = [

    path('empleados/', EmployeView.as_view()),
    path('empleados/<int:pk>/',  EmployeView.as_view()),


    #   path('usuarios/perfil', PerfilView.as_view()),

    path('home/', views.HomeView.as_view(), name='home'),

    # Login
    re_path(
        r'^o/(?P<provider>\S+)/$',
        CustomProviderAuthView.as_view(),
        name='provider-auth'
    ),
    path('jwt/create/', CustomTokenObtainPairView.as_view()),
    path('jwt/refresh/', CustomTokenRefreshView.as_view()),
    path('jwt/verify/', CustomTokenVerifyView.as_view()),
    path('logout/', LogoutView.as_view()),


    #   path('token/',
    #       jwt_views.TokenObtainPairView.as_view(),
    #       name ='token_obtain_pair'),
    #   path('token/refresh/',
    #       jwt_views.TokenRefreshView.as_view(),
    #       name ='token_refresh'),

    path('empleados/', EmployeView.as_view()),
    path('empleados/<int:pk>/',  EmployeView.as_view()),


    #   path('usuarios/perfil', PerfilView.as_view()),

    path('home/', views.HomeView.as_view(), name='home'),
    path('logout/', views.LogoutView.as_view(), name='logout')
]


# urlpatterns = [
#     path('', views.ListTodo.as_view()),
#     path('<int:pk>/', views.DetailTodo.as_view()),
# ]
