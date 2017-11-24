import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  profile:any[];
  repos:any[];
  username:string;

  constructor(private gitsearchservice: GitsearchService) {

   }

   findProfile(){
   this.gitsearchservice.updateProfile(this.username)
   this.gitsearchservice.getProfileInfo().subscribe(profile => {
       console.log(profile);
       this.profile=profile;
   })
   this.gitsearchservice.getProfileRepos().subscribe(repos => {
       console.log(repos);
       this.repos=repos;
   })
   }

  ngOnInit() {
  }

}
