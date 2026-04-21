import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-pages-component/dashboard-pages-component'),
        children: [
            {
                path: 'treading',
                loadComponent: () => import('./gifs/pages/treading-pages-component/treading-pages-component')
            },
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search-pages-component/search-pages-component')
            },
            {
                path: 'history/:query',
                loadComponent: () => import('./gifs/pages/gif-history-component/gif-history-component')
            },
            {
                path: '**',
                redirectTo: 'treading'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

