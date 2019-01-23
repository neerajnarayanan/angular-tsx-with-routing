import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile'
@Injectable(
  {
    providedIn: 'root',
  }
)

export class ProfileService {
  constructor() {
    console.log("instance created");
  }
  profileData: Profile[] = [];
  // setProfileData(data: Profile) {
  //   console.log("set profile::", data);
  //   this.profileData.push(data);
  // }
  // getProfileData() {
  //   return this.profileData;
  // }

}
