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
    listsService = inject(ListsService)
    default_lists:List[] = [];
    custom_lists:List[] = [];
    authService = inject(AuthService);
  
    constructor() {
        effect(() => {
            const token = this.authService.authTokenSignal();
            if (!token) {
                this.default_lists = [];
                this.custom_lists = [];
                return;
            }

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
        });
    }
}
