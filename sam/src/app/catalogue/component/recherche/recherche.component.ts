import { Component, OnInit, ViewChildren, QueryList, Output, ViewChild, EventEmitter } from '@angular/core';
import { RechercheTagComponent } from "app/commun/component/recherche-tag/recherche-tag.component";
import { RechercheTextComponent } from "app/commun/component/recherche-text/recherche-text.component";
import { Recherche } from "app/catalogue/component/recherche";

@Component({
  selector: 'sam-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

     @ViewChildren(RechercheTextComponent) recherchesText: QueryList<RechercheTextComponent>;
    @ViewChild(RechercheTagComponent) rechercheTag: RechercheTagComponent;

    @Output() filtrer = new EventEmitter<Recherche>();

    _currentFiltre = new Recherche();

    categories = ['Show', 'Film', 'Music'];
    show = true;

    toggle() {
        this.show = !this.show;
    }

    ngOnInit(): void {
    }

    clear() {
        this.rechercheTag.clearTag();
        this.recherchesText.forEach(t => t.clearTexte());
        this.search();
    }

    search() {
        this.filtrer.next(this._currentFiltre);
    }

    setNomFilter(nom: string) {
        this._currentFiltre.nom = nom;
    }

    setDescriptionFilter(description: string) {
        this._currentFiltre.description = description;
    }

    setTagilter(tags: string[]) {
        this._currentFiltre.categories = tags;
    }

}
