from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse


from django.shortcuts import render
from .models import Empleado, User
from .serializers import EmployeSerializer, UserSerializer
# Create your views here.




class EmployeView(APIView):
    def get_Employe(self, pk):
        try:
            employe = Empleado.objects.get(id=pk)
            return employe
        except Empleado.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_Employe(pk)
            serializer = EmployeSerializer(data)
        else:
            data = Empleado.objects.all()
            serializer = EmployeSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = EmployeSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Empleado Agregado correctamente",safe=False)
        
        return JsonResponse("Ha ocurrido un error", safe=False)

    def put(self, request, pk=None):
        student_to_update = Empleado.objects.get(studentId=pk)
        serializer = EmployeSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student updated Successfully", safe=False)
        return JsonResponse("Failed To Update Student")

    def delete(self, request, pk):
        student_to_delete = Empleado.objects.get(studentId=pk)
        student_to_delete.delete()
        return JsonResponse("Student Deleted Successfully", safe=False)
    

class PerfilView(APIView):
    def get_User(self, pk):
        try:
            employe = User.objects.get(id=pk)
            return employe
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        pk = 1
        if pk:
            data = self.get_User(pk)
            serializer = UserSerializer(data)
        else:
            data = User.objects.all()
            serializer = UserSerializer(data, many=True)
        return Response(serializer.data)
    
class LoginView(APIView):
    def post(self, request):
        data = request.data

        return JsonResponse("Login success",safe=False)

        # if serializer.is_valid():
        #     serializer.save()
        #     return JsonResponse("Empleado Agregado correctamente",safe=False)
        
        # return JsonResponse("Ha ocurrido un error", safe=False)