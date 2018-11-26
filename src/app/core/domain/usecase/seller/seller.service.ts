import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SellerGatewayAbstract } from "../../model/seller/gateway/seller-gateway.abstract";
import { Seller } from "../../model/seller/entity/seller.model";


@Injectable()
export class SellerService {

    constructor(private sellerService: SellerGatewayAbstract) {
    }

    public getSellers(): Observable<Seller[]> {
        return this.sellerService.getSellers().pipe();
    }

}