import { Produit } from '../commun/model/produit';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class RepositoryService {

    public abstract getProduits(): Observable<Produit[]>;

    public abstract getCategories(): Observable<string[]>;

}
