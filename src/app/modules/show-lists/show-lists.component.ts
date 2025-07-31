import { Component, inject } from '@angular/core';
import { ListsService } from '../../core/services/lists.service'

interface ListInterface {
  id: number,
  user_id: number,
  name: string,
  description: string,
  private: boolean,
  created_at: string,
  updated_at: string
}

@Component({
  selector: 'app-show-lists',
  imports: [],
  templateUrl: './show-lists.component.html',
  styleUrl: './show-lists.component.css'
})
export class ShowListsComponent {
    listsService = inject(ListsService)
    default_lists:ListInterface[] = [];
    custom_lists:ListInterface[] = [];
  
    ngOnInit() {
        this.listsService.getDefaultLists().subscribe({
            next: (response) => {
                this.default_lists = response;
            },
            error: (error) => {
                console.error('Error fetching lists:', error);
            }
        })

        this.listsService.getCustomLists().subscribe({
            next: (response) => {
                this.custom_lists = response;
            },
            error: (error) => {
                console.error('Error fetching lists:', error);
            }
        })


    }
}
