import { Component, inject, OnInit } from '@angular/core';
import { ListsService } from '../../core/services/lists.service'

@Component({
  selector: 'app-lists',
  imports: [],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  listService = inject(ListsService)
  lists:any = []

  ngOnInit(): void {
    // this.listService.getLists().subscribe()
    this.listService.getLists().subscribe((ob) => {
      this.lists = ob
    })
  }
}
