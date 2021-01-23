import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetail } from '@app/core/entities/core.entitie';
import { Observable } from 'rxjs';
import { DetailsFacade } from './facades/details.facade';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public getItemDetailsData$: Observable<ItemDetail> = this.detailsFacade.getItemDetailsData$;
  public getBreadCrumbData$: Observable<string[]> = this.detailsFacade.getBreadCrumbData$;
  public getLoadScreen$: Observable<boolean> = this.detailsFacade.getLoadScreen$;

  public conditions = [
    { status: 'new', text: 'Nuevo' },
    { status: 'used', text: 'Usado' }
  ]

  constructor(private detailsFacade: DetailsFacade,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      if (data?.id){
        this.detailsFacade.getItemDetailFn(data);
      }
    });
  }

  public conditionStatus(status: string): string{
    return this.conditions.find(data => data.status === status).text;
  }

}
