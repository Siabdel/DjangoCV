# DjangoResume
Django Resume Modern.

Resume site based on Django

See it live at  siabdel

## Installation

This repository uses a sqlite database. The data for my CV has been dumped to resume/fictures/data.json. I suggest setting up a virtual environment for python 3.4, installing sqlite, create a database user, and set up a couple of secret keys and passwords.

## Virtual environment

python3 -m pip3 install --user virtualenv 
cd ~/virtualenv 
virtualenv django_resume
source django_resume/bin/activate
(django_resume)$ pip install -r requirements.txt 
(django_resume)$ python setup.py install  

## Security Settings

Export an environment variable as follows (in linux) before running the server:

export SECRET_KEY="*my secret key*"
Start Djangoresume
To start Djangoresume with the data in my CV run the following:

python3 manage.py loaddata resume/fixtures/data.json
To start fresh:

python3 manage.py flush 		#clear all data
python3 manage.py createsuperuser 	#create a superuser
python3 manage.py runserver 		

## launch the server

!firefox http://127.0.0.1:8000/admin 	#launch your browser on localhost
Then use the UI to manually insert data.
