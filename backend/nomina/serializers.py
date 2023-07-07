from rest_framework import serializers
from .models import Empleado, User


class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'nombre',
            'salario_base',
            'horas_trabajadas',
            'activo',
        )
        model = Empleado

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields =(
            'id',
            'name',
            'password',
            'token',
        )
        model = User