import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filters, Item } from '@app/core/entities/core.entitie';
import { Observable } from 'rxjs';
import { SearchFacade } from './facades/search.facade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public getItemsData$: Observable<Item[]> = this.searchFacade.getItemsData$;
  public getBreadCrumbData$: Observable<string[]> = this.searchFacade.getBreadCrumbData$;
  public getLoadScreen$: Observable<boolean> = this.searchFacade.getLoadScreen$;

  constructor(private searchFacade: SearchFacade,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      (query: Filters) => {
        if (query.search){
          this.searchFacade.getItemsFn(query);
        }
      }
    );
  }

}
