import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ListsService } from '../../core/services/lists.service';

@Component({
  selector: 'app-add-list',
  imports: [ReactiveFormsModule],
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent {
  router = inject(Router);
  listService = inject(ListsService);

  addListForm: FormGroup;

  constructor() {
    this.addListForm = new FormGroup({
      name: new FormControl(""),
      description: new FormControl("")
    });
  }

  onSubmit() {
    this.listService.createList(this.addListForm.value).subscribe({
      next: (response) => {
        console.log('List created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating list:', error);
      },
      complete: () => {
        this.router.navigate(['/show-lists']);
      }
    });
  }
}
