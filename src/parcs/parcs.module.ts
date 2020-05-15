import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parc } from './parc.entity';
import { ParcsService } from './parcs.service';
import { ParcsController } from './parcs.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Parc])],
    providers: [ParcsService],
    controllers: [ParcsController]
})
export class ParcsModule {}
