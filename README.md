# findmypet

FindmyPet ist eine kleine GIS Applikation für vermisste Tiere. Auf einer Map können Vermisstenanzeigen geschaltet werden. Watcher können über eine App die Anzeigen beobachten und mögliche Sichtungen dem Tierinhaber mit einem Handy Foto mitteilen. Dabei wird der Standort der Sichtung mitgeteilt

Dieses kleine Projekt entstand im Rahmen meiner Weiterbildung und ist eine erste(leider sehr verbuggte Version).

Info:

- ReactJS Single Page Application
- AWT Token Authentication
- active Data-Map with Nuts/resgate Brocker and Websocket binding to resgate (not implemented)

mogging 

logout - delete localStorage Key token and user

----available Rest-Apis-----

Add pet
POST http://localhost:8080/api/v1/addPet (need valid jwt Token)
{

    "message" :  "hallo",
    "imgUrl": "test.jpg",
    "coordinates_Point_Lat": "53.23763287",
    "coordinates_Point_Lng" :"13.32746872",
    "userOwner": 1

}

get PetList
GET http://localhost:8080/api/v1/getPetList

Register a User
POST http://localhost:8080/login/auth/register
{"firstname":"Name","lastname":"Name","email":"test@mail.de","password":"123456","confirmPassword":"123456"}


login Example
POST http://localhost:8080/login
{"username": "est@mail.de","password": "123456"}

Implemented User for testing
"test1@mail.de", "password"
"test2@mail.de", "password"
"test3@mail.de", "password1234"
