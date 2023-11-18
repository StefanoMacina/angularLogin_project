import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { SignupComponent } from '../components/signup/signup.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate : [AuthGuard],
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        
        
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
