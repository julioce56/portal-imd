import { ClientGatewayAbstract } from "../../domain/model/client/gateway/client-gateway.abstract";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from "../../shared/services/configuration.service";
import { Observable } from "rxjs";
import { Client } from "../../domain/model/client/entity/client.model";


@Injectable()
export class ClientService extends ClientGatewayAbstract {

    private url: string;
    private port: string;

    constructor(private http: HttpClient) {
        super();

        this.url = `${ConfigurationService.config.urlBase}`;
        this.port = `${ConfigurationService.config.portBase}`;
    }


    /**
     * Return all clients
     */
    public getClients(): Observable<Client[]> {
        const url = `${this.url}${this.port}/api/client/getClients`;
        return this.http.get<Client[]>(url);
    }

}