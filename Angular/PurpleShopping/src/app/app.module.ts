import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { ShopCategoryComponent } from './components/shop/shop-category/shop-category.component';
import { HomeProductComponent } from './components/home/home-product/home-product.component';
import { HomeCategoryComponent } from './components/home/home-category/home-category.component';
import { ShopProductComponent } from './components/shop/shop-product/shop-product.component';
import { ShopProductSortPipe } from './components/shop/shop-product/pipes/shop-product-sort.pipe';
import { CartComponent } from './components/cart/cart.component';
import { ShopProductOrderbyPipe } from './components/shop/shop-product/pipes/shop-product-orderby.pipe';
import { ShopProductFiltercolorPipe } from './components/shop/shop-product/pipes/shop-product-filtercolor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopComponent,
    HomeComponent,
    ShopCategoryComponent,
    HomeProductComponent,
    HomeCategoryComponent,
    ShopProductComponent,
    ShopProductSortPipe,
    CartComponent,
    ShopProductOrderbyPipe,
    ShopProductFiltercolorPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, Ng5SliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
