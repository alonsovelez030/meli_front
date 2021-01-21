import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public currentSearch: string;

  constructor(private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      (query: { search: string }) => {
        if (query.search) {
          this.currentSearch = query.search;
        }
      }
    );
  }

  public search(): void {
    if (this.currentSearch) {
      this.route.navigate(['/items'], {
        queryParams: {
          search: this.currentSearch
        }
      });
    }
  }

}
