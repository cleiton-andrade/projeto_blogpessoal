import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity"
import { Usuario } from "../../usuario/entities/usuario.entity"

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

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}
