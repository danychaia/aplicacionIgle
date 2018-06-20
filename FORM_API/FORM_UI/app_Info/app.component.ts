import { Component, ElementRef } from '@angular/core';
//import { UserService } from './Services/user.service';
//import '../CRMContext.js';

declare var crmContext: any;

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`
})
export class Appcomponent {

    crmUser: string = "";

    constructor() {

    }
}