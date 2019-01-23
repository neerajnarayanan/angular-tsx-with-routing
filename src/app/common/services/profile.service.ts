import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable(
  {
    providedIn: 'root',
  }
)

export class ProfileService {
  constructor(public http: Http) {
  }
  profileData: Profile[] = [];
  posttodb() {
    const data = {
     'firstnam': 'ramu'
    };
    const headers = new Headers({ 'Content-Type': 'application/json', 'enctype': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/listitems', data, options).pipe(map((res: Response) => res.json()));
}
  // setProfileData(data: Profile) {
  //   console.log("set profile::", data);
  //   this.profileData.push(data);
  // }
  // getProfileData() {
  //   return this.profileData;
  // }

}
