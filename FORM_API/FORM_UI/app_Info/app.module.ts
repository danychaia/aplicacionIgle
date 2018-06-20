import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { Appcomponent } from './app.component';
import { NKDatetimeModule } from '../node_modules/ng2-datetime/ng2-datetime';
import { IngresoForm } from './IngresoForm/IngresoForm.component';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing, NKDatetimeModule],
    declarations: [Appcomponent, IngresoForm],
    //providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    //providers: [PagerService, NotasOAuth],
    bootstrap: [Appcomponent]
})

export class AppModule { }