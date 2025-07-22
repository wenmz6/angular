import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Exo } from './exo/exo';
import { Demo1 } from './demo/demo1/demo1';
import { Exo1 } from './exo/exo1/exo1';


export const routes: Routes = [
    {
        path: 'demo', component: Demo, children: [
            { path: 'demo1', component: Demo1 }
        ]
    },
    {
        path: 'exo', component: Exo, children: [
            { path: 'exo1', component: Exo1 }
        ]
    },
    // { path: '**', redirectTo: 'demo' }
];
