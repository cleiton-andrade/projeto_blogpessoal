import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";

@Controller("/postagens") // Indica que a Classe é uma Controller
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) { }

    @Get() // Indica qual tipo de Requisição esse método é executado
    @HttpCode(HttpStatus.OK) // Monta a Resposta HTTP para o Front com status 200
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();
    }
}