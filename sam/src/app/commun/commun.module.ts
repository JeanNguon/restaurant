
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from "../commun/component/menu/menu.component";
import { RechercheTagComponent } from './component/recherche-tag/recherche-tag.component';
import { RechercheTextComponent } from './component/recherche-text/recherche-text.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, HeaderComponent, RechercheTagComponent, RechercheTextComponent, ModalComponent], 
  exports:[
    MenuComponent, 
    HeaderComponent
  ]
})
export class CommunModule { }
