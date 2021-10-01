import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SettingsService } from './services/settings.service';
import { HttpModule } from '@angular/http';
import { LocalStorageUtils } from './helpers/local-storage.utils';
import { TokenInterceptor } from './common/header-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Boot the endpoint file on init.
export function initSettings(settingService: SettingsService): Function {
  return () => settingService.load();
}

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
  imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, HttpClientModule, Ng5SliderModule, HttpModule, ToastrModule.forRoot()],
  providers: [LocalStorageUtils, {
    provide: APP_INITIALIZER,
    useFactory: initSettings,
    deps: [SettingsService],
    multi: true
  }, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
