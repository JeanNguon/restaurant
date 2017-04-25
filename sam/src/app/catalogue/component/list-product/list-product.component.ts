import { ActivatedRoute } from '@angular/router';
import { Recherche } from '../recherche';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Produit } from "app/commun/model/produit";
import { PanierService } from "app/service/panier.service";
import { ModalComponent } from "app/commun/component/modal/modal.component";
import { RepositoryService } from "app/service/repository.service";
import { ISubscription } from "rxjs/Subscription";


@Component({
  selector: 'sam-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
 
    @ViewChild(ModalComponent) detailModal: ModalComponent;

    filtre = '';

    detailProduit?: Produit;
    lastProduit?: Produit;
    produits: Produit[];
    _produits: Produit[];

    private _lastSub: ISubscription;

    constructor(private _repo: RepositoryService,
        private _panier: PanierService,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.filtre = this.route.snapshot.queryParams['filter'] || '';

        this._repo.getProduits().subscribe(produits => {
            this._produits = produits;
            this.applyFilter(this.filtre);
        });

        this._lastSub = this._panier.getLast().subscribe(l => this.lastProduit = l);
    }

    applyFilter(filtre: string) {
        this.filtre = filtre;
        this.produits = this._produits.filter(p => !this.filtre || p.nom.indexOf(this.filtre) >= 0);
    }

    filtrer(recherche: Recherche) {
        this.filtre = '';
        this.produits = this._produits.filter(p =>
            (!recherche.nom || p.nom && p.nom.toLowerCase().indexOf(recherche.nom.toLowerCase()) >= 0) &&
            (!recherche.description || p.description && p.description.toLowerCase().indexOf(recherche.nom.toLowerCase()) >= 0) &&
            (!recherche.categories || !recherche.categories.length || recherche.categories.indexOf(p.categorie) >= 0));
    }

    showDetail(produit: Produit) {
        this.detailProduit = produit;
        this.detailModal.showModal();
    }

    hideDetail() {
        this.detailModal.hideModal();
        this.detailProduit = undefined;
    }

    ngOnDestroy(): void {
        this._lastSub.unsubscribe();
    }
}
