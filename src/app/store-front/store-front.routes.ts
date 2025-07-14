import { Routes } from "@angular/router";
import { StoreFrontLayoutComponent } from "@store-front/layouts/store-front-layout/store-front-layout.component";
import { HomePageComponent } from "@store-front/pages/home-page/home-page.component";
import { GenderPageComponent } from "@store-front/pages/gender-page/gender-page.component";
import { NotFoundPageComponent } from "@store-front/pages/not-found-page/not-found-page.component";
import { ProductPageComponent } from "@store-front/pages/product-page/product-page.component";

export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'gender/:gender',
        component: GenderPageComponent,
      },
      {
        path: 'product/:idSlug',
        component: ProductPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
]

export default storeFrontRoutes;
