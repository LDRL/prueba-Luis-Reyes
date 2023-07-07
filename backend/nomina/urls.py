from django.urls import path
from . import views
from .views import EmployeView, LoginView, PerfilView

urlpatterns = [
    path('empleados/', EmployeView.as_view()),
    # path('create',views.CreateEmploye.as_view()),
    path('empleados/<int:pk>/',  EmployeView.as_view()),
    
    path('usuarios/login', LoginView.as_view()),
    path('usuarios/perfil', PerfilView.as_view())
]


# urlpatterns = [
#     path('', views.ListTodo.as_view()),
#     path('<int:pk>/', views.DetailTodo.as_view()),
# ]