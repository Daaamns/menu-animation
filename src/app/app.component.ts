import { Component } from '@angular/core';
import { BandeAnimationComponent } from './bande-animation/bande-animation.component';
import { RouterOutlet } from '@angular/router';
import { slider } from './shared/slide';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BandeAnimationComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider], // Ajoutez l'animation ici
})
export class AppComponent {
  title = 'manu-anime';

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
