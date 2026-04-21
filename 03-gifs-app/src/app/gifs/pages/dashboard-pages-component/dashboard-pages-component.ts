import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from '../../components/gifs-side-menu-component/gifs-side-menu-header-component/gifs-side-menu-header-component';
import { GifsSideMenuOptionsComponent } from '../../components/gifs-side-menu-component/gifs-side-menu-options-component/gifs-side-menu-options-component';
import { GifsSideMenuComponent } from "../../components/gifs-side-menu-component/gifs-side-menu-component";

@Component({
  selector: 'app-dashboard-pages-component',
  imports: [
    RouterOutlet,
    GifsSideMenuComponent
],
  templateUrl: './dashboard-pages-component.html'
})
export default class DashboardPagesComponent { }
