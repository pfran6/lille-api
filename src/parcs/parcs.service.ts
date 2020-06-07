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

    getType(): Promise<Parc[]> {
        return this.parcsRepository
            .createQueryBuilder("parc")
            .select([
                "parc.type",
                "COUNT(parc.type) AS nb"
            ])
            .groupBy("parc.type")
            .orderBy("parc.type")
            .getRawMany();
    }

    getQuartier(): Promise<Parc[]> {
        return this.parcsRepository
            .createQueryBuilder("parc")
            .select([
                "parc.quartier",
                "COUNT(parc.quartier) AS nb"
            ])
            .groupBy("parc.quartier")
            .orderBy("parc.quartier")
            .getRawMany();
    }

    getSearch(param: string): Promise<Parc[]> {
        return this.parcsRepository
            .createQueryBuilder("parc")
            .where("parc.type = :type", { type: param })
            .orWhere("parc.quartier = :quartier", { quartier: param })
            .getRawMany();
    }
}
