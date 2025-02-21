import { Component } from '@angular/core';
import { BandeAnimationComponent } from './bande-animation/bande-animation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BandeAnimationComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'manu-anime';
}
