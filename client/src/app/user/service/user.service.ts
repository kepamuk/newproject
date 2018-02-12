import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {

  private url = 'http://kepamu01.beget.tech/';

  constructor(private http: HttpClient) {
  }

  regUser(arg) {
    console.log(arg);
    this.http.post(`${this.url}auth/registration`, arg).subscribe((data) => {
      console.log(data);
    });
  }

  checkDB(value, type) {
    let params = new HttpParams();

    params = params.append('value', value);
    params = params.append('type', type);

    return this.http.get(`${this.url}auth/checkField`, {params: params});
  }
}
