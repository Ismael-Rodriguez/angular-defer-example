import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeferClickComponent } from './defer-click/defer-click.component';
import { DeferInmediateComponent } from './defer-inmediate/defer-inmediate.component';
import { DeferPlaceholderComponent } from './defer-placeholder/defer-placeholder.component'
import { DeferViewportComponent } from './defer-viewport/defer-viewport.component'
import { DeferLoadingComponent } from './defer-loading/defer-loading.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DeferClickComponent,
    DeferInmediateComponent,
    DeferPlaceholderComponent,
    DeferViewportComponent,
    DeferLoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng17-defer';

  public deferInmediate = `
    @defer{
      <app-defer-inmediate />
    }
  `

  public deferClick = `
    @defer (on interaction(trigger)){
      <app-defer-click />
    }
  `;

  public deferPlaceholder = `
    @defer (on timer(5000ms)){
      <app-defer-placeholder />
      } @placeholder {
      <img
        src="../assets/placeholder.gif"
        height="230"
        alt="machine"
      >
      }
  `

  public deferViewport = `
    <div #triggerViewport></div>

    @defer (on viewport(triggerViewport)){
      <app-defer-viewport />
    }
  `
}
