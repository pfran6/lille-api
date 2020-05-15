import { Controller, Get, Param } from '@nestjs/common';
import { ParcsService } from './parcs.service';
import { Parc } from './parc.entity';

@Controller('parcs')
export class ParcsController {
    constructor(private readonly parcsServcice: ParcsService) {  }

    @Get()
    findAll(): Promise<Parc[]> {
        return this.parcsServcice.findAll();
    }

    @Get('a/:id')
    findOne(@Param('id') id: string): Promise<Parc> {
        return this.parcsServcice.findOne(id);
    }

    @Get('b/quartier')
    quartier(): Promise<Parc[]> {
        return this.parcsServcice.quartier();
    }
}
