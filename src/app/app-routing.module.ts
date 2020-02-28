import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'bisnis-saya',
    loadChildren: () => import('./bisnis-saya/bisnis-saya.module').then( m => m.BisnisSayaPageModule)
  },
  {
    path: 'produk-saya',
    loadChildren: () => import('./produk-saya/produk-saya.module').then( m => m.ProdukSayaPageModule)
  },
  {
    path: 'daftar-mitra',
    loadChildren: () => import('./daftar-mitra/daftar-mitra.module').then( m => m.DaftarMitraPageModule)
  },
  {
    path: 'brosur',
    loadChildren: () => import('./brosur/brosur.module').then( m => m.BrosurPageModule)
  },
  {
    path: 'materi-lpp',
    loadChildren: () => import('./materi-lpp/materi-lpp.module').then( m => m.MateriLppPageModule)
  },
  {
    path: 'web-banner',
    loadChildren: () => import('./web-banner/web-banner.module').then( m => m.WebBannerPageModule)
  },
  {
    path: 'testimoni',
    loadChildren: () => import('./testimoni/testimoni.module').then( m => m.TestimoniPageModule)
  },
  {
    path: 'peluang',
    loadChildren: () => import('./peluang/peluang.module').then( m => m.PeluangPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
