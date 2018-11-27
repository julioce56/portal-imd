import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from "../../shared/services/configuration.service";
import { Observable } from "rxjs";
import { SellerGatewayAbstract } from "../../domain/model/seller/gateway/seller-gateway.abstract";
import { Seller } from "../../domain/model/seller/entity/seller.model";


@Injectable()
export class SellerService extends SellerGatewayAbstract {

    private url: string;
    private port: string;

    constructor(private http: HttpClient) {
        super();

        this.url = `${ConfigurationService.config.urlBase}`;
        this.port = `${ConfigurationService.config.portBase}`;
    }


    /**
     * Return all sellers
     */
    public getSellers(): Observable<Seller[]> {
        const url = `${this.url}${this.port}/api/seller/getSellers`;
        return this.http.get<Seller[]>(url);
    }

}