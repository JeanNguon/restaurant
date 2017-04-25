import { ListProductComponent } from './component/list-product/list-product.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RechercheComponent } from './component/recherche/recherche.component';
const catalogueRoutes: Routes = [
    {
        path: 'catalogue',
        children: [
            {
                path: '',
                redirectTo: 'produit',
                pathMatch: 'full'
            },
            {
                path: 'produit',
                component: ListProductComponent
            },

        ]
    }
];
@NgModule({
    declarations: [
        ListProductComponent,
        RechercheComponent],
    imports: [
        RouterModule.forChild(catalogueRoutes),
        CommonModule
    ],
    providers: [
    ],
    exports: [
        CommonModule,
        ListProductComponent
    ]
})
export class CatalogueModule { }
