import { Vendeur } from './vendeur';


export class Produit {
    id: number;
    nom: string;
    description: string;
    prix: number;
    image: string;
    vendeurId: number;
    clientId: number;
    etat:boolean;
}