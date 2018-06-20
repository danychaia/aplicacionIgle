import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { MenuAuth } from '../Objects/menuAuth';
//import { UserService } from '../Services/user.service';
//import { AutorizacionService } from '../Services/autorizacion.service';

@Component({
    selector: 'formIngreso',
    templateUrl: 'app_Info/IngresoForm/IngresoForm.component.html',
    //providers: [AutorizacionService]
})

export class IngresoForm implements OnInit {
    //menuAuth: MenuAuth[];
    errorMessage: string;
    errorExists: boolean;
    crmUser: string;
    coordinadorComite: boolean = false;
    gerenciaSector: boolean = false;
    jdComite: boolean = false;
    jdGeneral: boolean = false;
    comercializacion: boolean = false;
    vendedor: boolean = false;

    private sub: any;

    paramData: string;
    accountId: string;
    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {

        // Searchs and sets the param "accountId". 
        this.route.queryParams
            //.filter(params => params.order)
            .subscribe(params => {
                console.log(params);
                this.paramData = params['Data'];
                console.log("Data");
                console.log(this.paramData);

                if (this.paramData != undefined && this.paramData != "") {

                    var vals = new Array();
                    vals = this.paramData.split("&");
                    for (var i in vals) {
                        vals[i] = vals[i].replace(/\+/g, " ").split("=");
                    }
                    console.log(vals);
                    for (var i in vals) {
                        if (vals[i][0] == "accountId")
                            this.accountId = vals[i][1];
                    }

                    if (this.accountId != undefined && this.accountId != "")
                        this.router.navigate(["ListadoGeneral"], {
                            queryParams: { Data: this.paramData }
                        });
                }
            });


        //this.userService.userCRM$.subscribe(
        //    user => {
        //        this.crmUser = user;
        //        if (this.crmUser != null && this.crmUser != undefined) {
        //            this.getAuth();
        //        }
        //        else {
        //            this.errorExists = true;
        //            this.errorMessage = "Error al cargar el usuario actual."
        //        }
        //    }
        //);
    }

    irListadoGeneral() {
        this.router.navigate(['/ListadoGeneral']);
    }

    irListadoAreaResponsable() {
        this.router.navigate(['/ListadoArea']);
    }
}