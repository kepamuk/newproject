import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {

  private url = '';

  // private url = 'http://localhost:8080/';

  // private url = 'http://kepamu01.beget.tech/';

  constructor(private http: HttpClient) {
  }

  regUser(arg) {
    console.log(arg);
    this.http.post(`${this.url}api/auth/registration`, arg).subscribe((data) => {
      console.log(data);
    });
  }

  checkDB(value, type) {
    let params = new HttpParams();

    params = params.append('value', value);
    params = params.append('type', type);

    return this.http.get(`${this.url}api/auth/checkField`, {params: params});
  }

  getAll() {
    this.http.get(`${this.url}api/auth/getall`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
