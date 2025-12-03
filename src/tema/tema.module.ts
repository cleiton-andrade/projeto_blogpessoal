import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";
import { TemaController } from "./controllers/tema.controllers";
import { TemaService } from "./services/tema.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [TemaController],  //  Controller fica aqui
  providers: [TemaService],       //  Service fica aqui
  exports: [TemaService],         //  Agora pode exportar
})
export class TemaModule {}
