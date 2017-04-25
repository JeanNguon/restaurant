import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recherche-text',
  templateUrl: './recherche-text.component.html',
  styleUrls: ['./recherche-text.component.css']
})
export class RechercheTextComponent implements OnInit {

     texte = '';

    @Input() field: string;
    @Output() search = new EventEmitter<string>();

    ngOnInit(): void {
    }

    clearTexte() {
        this.applyFilter('');
    }

    applyFilter(texte: string) {
        this.texte = texte;
        this.search.next(this.texte);
    }
}
