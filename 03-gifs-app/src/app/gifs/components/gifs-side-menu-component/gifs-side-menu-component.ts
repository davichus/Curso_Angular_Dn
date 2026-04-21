import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from "./gifs-side-menu-header-component/gifs-side-menu-header-component";
import { GifsSideMenuOptionsComponent } from "./gifs-side-menu-options-component/gifs-side-menu-options-component";

@Component({
  selector: 'gifs-side-menu-component',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent],
  templateUrl: './gifs-side-menu-component.html',
})
export class GifsSideMenuComponent { }
