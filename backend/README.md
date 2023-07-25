# Production setup

1. DEBUG = False
2. check SECRET_KEY
3. check static files
4. check ALLOWED_HOSTS
5. check passenger_wsgi.py
6. check react endpoints
7. create own subdomain for API
8. create python app on hosting
9. upload backend files to root directory of the subdomain
10. pip install -r requirements.txt
11. python manage.py makemigrations
12. python manage.py migrate
13. python manage.py collectstatic
14. copy /static folder to /public_html/