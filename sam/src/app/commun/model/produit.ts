export class Produit {
    id: number;
    nom: string;
    description: string;
    categorie: TypeCategorieProduit;
    prix: number;
}

export declare type TypeCategorieProduit = 'Epicerie' | 'Plat à Emporter' | 'Autre';
