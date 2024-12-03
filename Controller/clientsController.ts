import { Request, Response } from "express";


function index (request: Request, response: Response, next: any) {
    response.render("index");
    //passando a renderização da view index
    // http://localhost:3000/
}

export default { index };