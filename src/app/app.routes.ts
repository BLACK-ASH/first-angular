import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
    // For Normal Imports

    // {
    //     path: '',
    //     component: Home
    // },
    // {
    //     path: 'about',
    //     component: About
    // },
    // {
    //     path: 'contact',
    //     component: Contact
    // }

    // For Lazy Loading
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact)
    }
];
