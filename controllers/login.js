import bcrypt from "bcrypt";
import clientModel from "../models/client.js";
import jwt from "jsonwebtoken";

export async function createLogin(req, res) {
 const { email, password } = req.body;
 clientModel.findOne({ email }).then((usuario) => {
  if (!usuario) {
   return res.json({ mensaje: "Usuario no encontrado" });
  }

  bcrypt.compare(password, usuario.password).then((esCorrecta) => {
   if (esCorrecta) {
    const { id, name } = usuario;

    const data = {
     id,
     name,
    };

    const token = jwt.sign(data, "secreto", {
     expiresIn: 86400 /* 24hs */,
    });

    res.json({
     mensaje: "Usuario logeado correctamente",
     usuario: {
      id,
      name,
      token,
     },
    });
   } else {
    return res.json({ mensaje: "Contraseña incorrecta" });
   }
  });
 });
}
