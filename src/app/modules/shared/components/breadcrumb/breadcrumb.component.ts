import { Component, Input, OnInit } from '@angular/core';
import { BreadCrumbEntitie } from '@app/core/entities/core.entitie';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumb: BreadCrumbEntitie[];

  constructor() { }

  ngOnInit(): void {
  }

}
