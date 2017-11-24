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

  constructor(private gitsearchservice: GitsearchService) {
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
