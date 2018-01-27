import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  regUser(arg) {
    console.log(arg);
    this.http.post('http://localhost:3000/auth/registration', arg).subscribe((data) => {
      console.log(data);
    });
  }

  checkDB(value, type) {
    let params = new HttpParams();

    params = params.append('value', value);
    params = params.append('type', type);

    return this.http.get('http://localhost:3000/auth/checkField', {params: params});
  }
}
