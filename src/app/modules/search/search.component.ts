import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadCrumbEntitie, Filters, Product } from '@app/core/entities/core.entitie';
import { Observable } from 'rxjs';
import { SearchFacade } from './facades/search.facade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public getProductsData$: Observable<Product[]> = this.searchFacade.getProductsData$;
  public getBreadCrumbData$: Observable<BreadCrumbEntitie[]> = this.searchFacade.getBreadCrumbData$;
  public getLoadScreen$: Observable<boolean> = this.searchFacade.getLoadScreen$;

  constructor(private searchFacade: SearchFacade,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      (query: Filters) => {
        if (query.search){
          this.searchFacade.getProducts(query);
        }
      }
    );
  }

}
