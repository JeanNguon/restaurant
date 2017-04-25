import { Produit } from '../commun/model/produit';
import { Observable, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class PanierService {
 private lastObserver$: Observer<Produit>;
    private lastObservable$: Observable<Produit>;

    private produits: { produit: Produit, quantite: number }[] = [];

    constructor() {
        this.lastObservable$ = new Observable<Produit>((observer: Observer<Produit>) => {
            this.lastObserver$ = observer;
        });
    }

    public ajouterProduit(produit: Produit) {
        const find = this.produits.find(p => p.produit.id === produit.id);
        if (find) {
            find.quantite++;
        } else {
            this.produits.push({ produit, quantite: 1 });
        }
        if (this.lastObserver$) {
            this.lastObserver$.next(produit);
        }
    }

    public supprimerProduit(produit: Produit) {
        const idx = this.produits.findIndex(p => p.produit.id === produit.id);
        if (idx >= 0) {
            this.produits.splice(idx, 1);
        }
    }

    public viderPanier() {
        this.produits.splice(0, this.produits.length);
    }

    public getProduits(): { produit: Produit, quantite: number }[] {
        return this.produits;
    }

    public getLast(): Observable<Produit> {
        return this.lastObservable$;
    }

}
