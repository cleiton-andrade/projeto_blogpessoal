import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_postagens"}) // Indica que a classe é uma Entidade / Model
export class Postagem {

    @PrimaryGeneratedColumn() // Chave primaria e auto incremental no banco de dados
    id: number

    @IsNotEmpty() // Validador do objeto
    @Column({length: 100, nullable: false}) // Tamanho maximo: 100 | Regra do MySQL - NOT NULL
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) // Tamanho maximo: 1000 | Regra do MySQL - NOT NULL
    texto: string

    @UpdateDateColumn()
    data: Date
}
