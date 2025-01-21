import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserChartsComponent } from './user-charts/user-charts.component';



export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        title: 'Products list'
    },
    {
        path: 'product-details/:id',
        component: ProductDetailesComponent,
        title: 'Product Detail',
    },
    {
        path: 'User-Login',
        component: LoginComponent,
        title: 'Login User',
    },
    {
        path: 'User-rigester',
        component: RegisterComponent,
        title: 'Register User',
    },
    {
        path: 'User-charts',
        component: UserChartsComponent,
        title: 'User Charts',
    },
    {
      path: '**',
      component: NotFoundComponent,
      title: 'not found page'
    },
];
