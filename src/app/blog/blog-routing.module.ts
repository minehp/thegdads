import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { 
        path: '',
        loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
