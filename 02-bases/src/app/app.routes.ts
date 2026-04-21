import { Routes } from '@angular/router';
import { CouterComponent } from './component/couter-component/couter-component';
import { HeroComponent } from './component/hero-component/hero-component';
import { DragonballComponent } from './component/dragonball-component/dragonball-component';
import { DragonballsuperComponent } from './component/dragonballsuper-component/dragonballsuper-component';

export const routes: Routes = [
    {
        path: '',
        component: CouterComponent
    },
    {
        path: 'hero',
        component: HeroComponent
    },
    {
        path: 'dragon-ball',
        component: DragonballComponent
    },
    {
        path: 'dragon-ball-super',
        component: DragonballsuperComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
