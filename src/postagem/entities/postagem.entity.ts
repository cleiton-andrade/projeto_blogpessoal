import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity"
import { Usuario } from "../../usuario/entities/usuario.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_postagens"}) // Indica que a classe é uma Entidade / Model
export class Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn() // Chave primaria e auto incremental no banco de dados
    id: number

    @ApiProperty()
    @IsNotEmpty() // Validador do objeto
    @Column({length: 100, nullable: false}) // Tamanho maximo: 100 | Regra do MySQL - NOT NULL
    titulo: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) // Tamanho maximo: 1000 | Regra do MySQL - NOT NULL
    texto: string

    @ApiProperty()
    @UpdateDateColumn()
    data: Date

    @ApiProperty({type: () => Usuario })
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}
