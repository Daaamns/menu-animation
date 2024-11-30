import { Component } from '@angular/core';
import { BandeAnimationComponent } from './bande-animation/bande-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BandeAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'manu-anime';
}
