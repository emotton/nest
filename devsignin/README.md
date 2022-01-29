yarn add @nestjs/jwt jsonwebtoken @nestjs/mongoose mongoose bcrypt class-transformer class-validator @nestjs/passport passport passport-jwt uuid dotenv

nest g module users

nest g controller users --no-spec

nest g service users --no-spec

nest g module auth

nest g service auth --no-spec


Refências
=========

https://www.mongodb.com/


{
	"name": "Eduardo",
	"email": "emotton@gmail.com",
	"password": "9$Numsey9"
}

{
  "_id": "61a9270e9fa774723cd53ad7",
  "name": "Eduardo",
  "email": "emotton@gmail.com",
  "password": "$2b$10$m8.NU.3N35ycTZDCUpeirufymmxnv59kIIAE8YC3T7TaL3AEAw7kK",
  "__v": 0
}

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWE5MjcwZTlmYTc3NDcyM2NkNTNhZDciLCJpYXQiOjE2Mzg0NzU2NTUsImV4cCI6MTYzODU2MjA1NX0.Kq0TZJZYO7h7kzwUu1Pu7hhmil3kHdkwjfOHcMNd3Ag