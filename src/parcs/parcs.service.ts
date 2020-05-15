import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parc } from './parc.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParcsService {
    constructor(
        @InjectRepository(Parc)
        private readonly parcsRepository: Repository<Parc>
    ) {  }

    async findAll(): Promise<Parc[]> {
        return this.parcsRepository.find();
    }

    findOne(id: string): Promise<Parc> {
        return this.parcsRepository.findOne(id)
    }

    quartier(): Promise<Parc[]> {
        return this.parcsRepository
            .createQueryBuilder("parc")
            .select([
                "parc.sous_type AS sous_type",
                "COUNT(parc.sous_type) AS nb"
            ])
            .groupBy("parc.sous_type")
            .getRawMany();
    }
}
