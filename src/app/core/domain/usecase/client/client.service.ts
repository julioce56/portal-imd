import { Injectable } from "@angular/core";
import { ClientGatewayAbstract } from "../../model/client/gateway/client-gateway.abstract";
import { Observable } from "rxjs";
import { Client } from "../../model/client/entity/client.model";

@Injectable()
export class ClientService {

    constructor(private clientService: ClientGatewayAbstract) {
    }

    public getClients(): Observable<Client[]> {
        return this.clientService.getClients().pipe();
    }

}