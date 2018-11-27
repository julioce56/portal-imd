import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from "../../shared/services/configuration.service";
import { Observable } from "rxjs";
import { SupplierGatewayAbstract } from "../../domain/model/supplier/gateway/supplier-gateway.abstract";
import { Supplier } from "../../domain/model/supplier/entity/supplier.model";


@Injectable()
export class SupplierService extends SupplierGatewayAbstract {

    private url: string;
    private port: string;

    constructor(private http: HttpClient) {
        super();

        this.url = `${ConfigurationService.config.urlBase}`;
        this.port = `${ConfigurationService.config.portBase}`;
    }


    /**
     * Return all suppliers
     */
    public getSuppliers(): Observable<Supplier[]> {
        const url = `${this.url}${this.port}/api/supplier/getSuppliers`;
        return this.http.get<Supplier[]>(url);
    }

}