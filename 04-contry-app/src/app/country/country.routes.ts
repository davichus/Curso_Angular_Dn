import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page.component/by-capital-page.component';

export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayoutComponent,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPageComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
export default countryRoutes;
