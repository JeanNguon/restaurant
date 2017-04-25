import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recherche-tag',
  templateUrl: './recherche-tag.component.html',
  styleUrls: ['./recherche-tag.component.css']
})
export class RechercheTagComponent implements OnInit {

     tags: { value: string, checked?: boolean }[];

    @Input() field: string;
    @Input() set values(arr: string[]) {
        this.tags = arr ? arr.map(value => ({ value })) : [];
    };
    @Output() search = new EventEmitter<string[]>();

    ngOnInit(): void {
    }

    toggleValue(tag: { value: string, checked?: boolean }) {
        tag.checked = !tag.checked;
        this.search.emit(this.tags.filter(t => t.checked).map(t => t.value));
    }

    clearTag() {
        this.tags.forEach(t => t.checked = false);
        this.search.emit([]);
    }

}
