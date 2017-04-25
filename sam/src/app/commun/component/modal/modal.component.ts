import { AfterViewInit } from '@angular/core/core';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit{

   isOpen = false;

    private $el: JQuery;

    @Input() closable: boolean;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        this.$el = $(this.el.nativeElement).children().first();
    }

    public showModal() {
        this.$el.modal({ closable: !!this.closable });
        this.$el.modal('show');
        this.isOpen = true;
    }

    public hideModal() {
        this.$el.modal('hide');
        this.isOpen = false;
    }
}
