import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
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

    @Get("/:id_post")
    @HttpCode(HttpStatus.OK) // Monta a resposta HTTP para o Front com o status 200
    findById(@Param('id_post', ParseIntPipe) id_post: number):  Promise<Postagem> {
        return this.postagemService.findById(id_post)
    }

    @Get('/titulo/:titulo') // postagem, titulo, {texto}
    @HttpCode(HttpStatus.OK)
    findByAllTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.postagemService.findAllByTitulo(titulo);
    }

    @Post() // Cadastrar/Criar/Salva
    @HttpCode(HttpStatus.CREATED) // 201
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
  }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.postagemService.delete(id);
  }
}