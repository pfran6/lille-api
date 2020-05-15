import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Parc {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    quartier: string;

    @Column({ type: 'text' })
    hiearchie: string;

    @Column({ type: 'text' })
    sous_type: string;

    @Column({ type: 'text' })
    adresse: string;

    @Column({ type: 'text' })
    surface: string;
}