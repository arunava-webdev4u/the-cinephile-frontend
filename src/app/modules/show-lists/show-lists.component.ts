import { Component, effect, inject } from '@angular/core';
import { ListsService } from '../../core/services/lists.service'
import { List } from '../../shared/interfaces/list';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-show-lists',
  imports: [],
  templateUrl: './show-lists.component.html',
  styleUrl: './show-lists.component.css'
})
export class ShowListsComponent {
    listsService = inject(ListsService);
    authService = inject(AuthService);

    default_lists:List[] = [];
    custom_lists:List[] = [];
  
    constructor() {
        this.listsService.getLists();
        effect(() => {
            this.default_lists = this.listsService.defaultLists();
            this.custom_lists = this.listsService.customLists();
        });
    }
    
}
