/*definição das Rotas e chamada do controller*/
import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router()

// http://localhost:3000/
router.get("/", clientsController.index);

router.get("/sobrenos", (request, response) => {
    response.send("Rota Sobre Nós");
    // http://localhost:3000/sobrenos
});

router.get("/trabalheconosco", (request, response) => {
    response.send("Rota Trabalhe Conosco - Carreiras");
    // http://localhost:3000/trabalheconosco
});

router.get("/contato", (request, response) => {
    response.send("Rota Contato");
    // http://localhost:3000/contato
});

export default router;