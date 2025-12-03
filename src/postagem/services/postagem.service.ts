import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable() // Indica que a classe é de serviço e pode ser inserida/injetada em outras classes
export class PostagemService {

    // Iniciando ferramentas para a classe da serviços
    constructor(
        @InjectRepository(Postagem) // Pode chamar os métodos de uma Classe Repository
        private postagemRepository: Repository<Postagem>
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find()
    }

    async findById(id: number): Promise<Postagem>{
        const postagem = await this.postagemRepository.findOne({
            where: { id }
        })

        if (!postagem){
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)
        }
        return postagem
    }

    async update(postagem: Postagem): Promise<Postagem>{
        await this.findById(postagem.id)
        return await this.postagemRepository.save(postagem);
    } 
    
    async findAllByTitulo(titulo: string) : Promise<Postagem[]>{
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            }
        })
    }
        async create(postagem: Postagem): Promise<Postagem> {
        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id)
        return await this.postagemRepository.delete(id)
    }
}