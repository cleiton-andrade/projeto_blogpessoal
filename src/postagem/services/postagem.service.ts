import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
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
}