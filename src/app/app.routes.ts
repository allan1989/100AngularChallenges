import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'component'},
    { path: 'component', loadComponent: () => import('./views/component-documentation/component-documentation.component').then(mod => mod.ComponentDocumentationComponent)},
    { path: 'directive', loadComponent: () => import('./views/directive-documentation/directive-documentation.component').then(mod => mod.DirectiveDocumentationComponent)},
    { path: 'service', loadComponent: () => import('./views/service-documentation/service-documentation.component').then(mod => mod.ServiceDocumentationComponent)},
    { path: 'pipe', loadComponent: () => import('./views/pipe-documentation/pipe-documentation.component').then(mod => mod.PipeDocumentationComponent)},
    { path: '**', pathMatch: 'full', redirectTo: 'component'}
];

