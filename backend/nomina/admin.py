from django.contrib import admin
from .models import Empleado, UserAccount 
# Register your models here.User

admin.site.register(Empleado)
admin.site.register(UserAccount)