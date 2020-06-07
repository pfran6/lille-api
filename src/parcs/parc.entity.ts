import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Parc {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    nom: string;

    @Column({ type: 'text' })
    quartier: string;

    @Column({ type: 'int' })
    hiearchie: number;

    @Column({ type: 'text' })
    type: string;

    @Column({ type: 'text' })
    sous_type: string;

    @Column({ type: 'text' })
    ouvert_public: string;

    @Column({ type: 'text' })
    ouverture_etat: string;

    @Column({ type: 'text' })
    horaire_ouverture_estivale: string;

    @Column({ type: 'text' })
    horaire_ouverture_hivernale: string;

    @Column({ type: 'text' })
    jeux_enfants: string;

    @Column({ type: 'text' })
    adresse: string;

    @Column({ type: 'double' })
    surface: number;
    
    @Column({ type: 'text' })
    acces_metro_500m: string;

    @Column({ type: 'text' })
    acces_tramway_500m: string;

    @Column({ type: 'text' })
    acces_ville_300m: string;

    @Column({ type: 'text' })
    annee_ouverture: string;

    @Column({ type: 'double' })
    x: number;

    @Column({ type: 'double' })
    y: number;

    @Column({ type: 'double' })
    longitude: number;

    @Column({ type: 'double' })
    latitude: number;
}