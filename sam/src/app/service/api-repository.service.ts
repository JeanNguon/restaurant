import { Produit, TypeCategorieProduit } from '../commun/model/produit';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiRepositoryService extends RepositoryService {

    private _categories: TypeCategorieProduit[] = ['Epicerie', 'Plat à Emporter', 'Autre'];

    constructor(private _http: Http) {
        super();
    }

    public getProduits(): Observable<Produit[]> {
        //return this._http.get('/api/data.json')

        return this._http.get('/api/produits')
            //.delay(1000)
            .map((res: Response) => {
                
                return res.json().data;
            })
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }

    public getCategories(): Observable<string[]> {
        return Observable.of(this._categories);
    }

}
