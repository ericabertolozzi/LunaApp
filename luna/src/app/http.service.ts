import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint: string) {
    let finaldest = "http://localhost:3000" + endpoint
    return this.httpClient.get(finaldest);
  }
}
