import { Component, OnInit } from '@angular/core';
import { Profile } from '../common/interfaces/profile';
import { ProfileService } from '../common/services/profile.service';

@Component({
  "selector": "create-student",
  "templateUrl": "./create.component.html"
})

export class CreateStudent {
  profile: Profile;
  myList: any[] = [];
  constructor(private profileService: ProfileService) {
    console.log("create constructor calling");
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.profile = {
      name: null,
      company: null,
      htmlScore: 0,
      cssScore: 0,
      javascriptScore: 0,
      angularScore: 0,
      totalScore: 0,
      avgScore: 0
    }
  }
  autoUpdateScore() {
    this.profile.totalScore = this.profile.htmlScore + this.profile.cssScore + this.profile.javascriptScore + this.profile.angularScore;
    this.profile.avgScore = this.profile.totalScore / 4;
  }
  saveFile() {
    console.log("saveFile ::", this.profile);
    this.myList.push(this.profile);
    this.profileService.profileData.push(this.profile);
  }
  getFile() {
    let data = this.profileService.profileData;
    console.log("local va:", this.myList);
    console.log("Data ::", data);
  }


}
