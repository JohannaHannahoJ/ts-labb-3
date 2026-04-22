import { Routes } from '@angular/router';
import { Converter } from './converter/converter';
import { Index } from './index';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: "hem", component: Index }, 
    { path: "omvandlare", component: Converter }, 
    { path: "om", component: About }, 
    { path: "", redirectTo: "hem", pathMatch: "full" }, 
    { path: "404", component: NotFound }, 
    { path: "**", redirectTo: "404", pathMatch: "full"}
];
