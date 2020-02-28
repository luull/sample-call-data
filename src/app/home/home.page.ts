import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpApiService } from '../service/http-api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
      "nama": "Muhammad Fadlullah", "desc": "Some quick example text to build on the card title and make up the bulk of the", "email": "m.fadlullah14@gmail.com"
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
