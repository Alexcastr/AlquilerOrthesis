import bcrypt from "bcrypt";
import clientModel from "../models/client.js";

export async function createRegister(req, res) {
 const { id, name, age, email, password } = req.body;

 clientModel.findOne({ email }).then((usuario) => {
  if (usuario) {
   return res.status(400).json({ error: "Ya existe un usuario con ese email" });
  } else if (!name || !age || !email || !password) {
   return res.status(400).json({ error: "Faltan campos" });
  } else {
   bcrypt.hash(password, 10, (error, contraHasheada) => {
    if (error) {
     res.json({ error });
    } else {
     const nuevoUsuario = new clientModel({
      id,
      name,
      age,
      email,
      password: contraHasheada,
     });

     nuevoUsuario
      .save()
      .then((usuario) => {
       res.json({ mensaje: "Usuario creado correctamente", usuario });
      })
      .catch((error) => console.error(error));
    }
   });
  }
 });
}
