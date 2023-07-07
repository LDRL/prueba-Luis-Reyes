from django.db import models

# Create your models here.
class Empleado(models.Model):
    nombre = models.CharField(max_length=100)
    salario_base = models.FloatField()
    horas_trabajadas = models.IntegerField()
    activo = models.BooleanField(default=True, editable=False)

    def __str__(self):
        return self.nombre

class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    token = models.CharField(max_length=100)

    def __str__(self):
        return self.name