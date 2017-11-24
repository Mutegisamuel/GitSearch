import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  constructor(private gitsearchservice: GitsearchService) {
    this.gitsearchservice.getProfileInfo().subscribe(profile => {
      
    })

   }

  ngOnInit() {
  }

}
