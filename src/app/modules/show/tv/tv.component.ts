import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv',
  imports: [],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {
  route = inject(ActivatedRoute);
  tvId: string | null = null;

  ngOnInit(): void {
    this.tvId = this.route.snapshot.paramMap.get('id');
  }
}
