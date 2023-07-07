# prueba-Luis-Reyes

# Backend - Django

### Crear un proyecto con django debe de tener instalado python en tu portatil
### Para este proyecto se instalo virtualenv

### pip ionstall virtualenv

### Crear un entorno virtual con el siguiente comando

### virtualenv venv

### Activar el entorno virtual con source venv/bin/activate

### crear proyecnto con django

### django-admin startproject nombredelproyecto 

### crear aplicaciones con python dentro de django

### python manage.py startapp nombre_de_la_aplicacion

### instalar los paquetes que nos ayudara para realizar la conexion al frontend

### pip install djangorestframework

### pip install django-cors-headers

### Database migrations

### python manage.py migrate

### python manage.py makegritaions

# Frontend - React js

### para poder conectar el frontend con el backend se debe de indicar a que direccion http hara la consulta para este caso se utilizo una variable de entorno para configurarlo

### Crear el archivo .env dentro del frontend y declar las siguientes variables

### SKIP_PREFLIGHT_CHECK=true
### VITE_BACKEND_URL = http://localhost:8000

### para poder ingresar a la aplicacion se debe de autenticar, en este caso puede ser cualquier correo electronico y cualquier contraseña

