import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: `home`, loadChildren: () => 
    import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `characters`, loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: `details`, loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: `creations-details`, loadChildren: () => import ('./pages/creations-detail/creations-detail.module').then(m => m.CreationsDetailModule)
  },
  {
    path: `form`, loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
  },
  {
    path: `creations`, loadChildren: () => import('./pages/creations/creations.module').then(m => m.CreationsModule)
  },
  {
    path: `about`, loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {path: "", redirectTo: `home`, pathMatch: `full`}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

