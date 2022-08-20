PARA REGISTRARSE NECESITAMOS RECIBIR UN OBJETO COMO EL SIGUIENTE
{
  firstName: 'Martina Carolina',
  lastName: 'Perez',
  adress: 'barrio 200 vivi.',
  age: '27',
  phonenumber: '+543624779235',
  email: 'valeria123@gmail.com',
  username: 'Valeria88',
  password: 'casa123',
}
___________________________________________________________________

SI EL REGISTRO SE REALIZA DE MANERA EXITOSA, LA INFO DEL USUARIO QUEDARIA GUARDADA EN UN OBJETO
CON LA CONTRASENA ENCRIPTADA Y EL MISMO MONGO AGREGA UN ID. COMO EL SIGUIENTE:
{
  _id: new ObjectId("62eb13a3c07dc9bc13b12322"),
  firstName: 'Martina Carolina',
  lastName: 'Perez',
  adress: 'barrio 200 vivi.',
  age: '27',
  phonenumber: '+543624779235',
  email: 'valeria123@gmail.com',
  username: 'Valeria88',
  password: '$2b$10$Q6mGK/Vckr/DGD6AzDdlFeye0igBBF0MZrMdBPECCCuTTQzmu/j1q',
  __v: 0
}