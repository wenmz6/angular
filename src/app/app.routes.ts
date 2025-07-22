import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Exo } from './exo/exo';
import { Demo1 } from './demo/demo1/demo1';


export const routes: Routes = [
    {
        path: 'demo', component: Demo, children: [
            { path: 'demo1', component: Demo1 }
        ]
    },
    { path: 'exo', component: Exo },
    { path: '**', redirectTo: 'demo' }
];
