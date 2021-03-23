import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChargeServiceService {

  constructor(private http: HttpClient) { }

  registerCharge(playload): Observable<number>{
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    // header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<number>(environment.BASE + '/charges/register', playload, options);
  }
}
