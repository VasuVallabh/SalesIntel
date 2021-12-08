import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MainNavModule} from "./main-nav/main-nav.module";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        MainNavModule
    ]
})
export class LayoutModule { }
