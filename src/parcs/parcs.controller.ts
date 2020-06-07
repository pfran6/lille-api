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

    @Get('b/gettype')
    getType(): Promise<Parc[]> {
        return this.parcsServcice.getType();
    }

    @Get('b/getquartier')
    getQuartier(): Promise<Parc[]> {
        return this.parcsServcice.getQuartier();
    }

    @Get('c/:param')
    getSearch(@Param('param') param: string): Promise<Parc[]> {
        return this.parcsServcice.getSearch(param);
    }
}
