import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpApiService } from '../service/http-api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {
  data: any;
  name: any;
  constructor(
    private http: HttpClient,
    private httpApi: HttpApiService,
    private rtr: Router,
    public toastController: ToastController

  ) {
    this.httpApi.getData().subscribe((value: any) => {
      console.log(value);
      this.data = value;

    });
    this.name = [{
      "nama": "luull", "desc": "Some quick example text to build on the card title and make up the bulk of the", "email": "m.fadlullah14@gmail.com"
    }];

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Underconstraction',
      duration: 2000

    });
    toast.present();
  }
}
