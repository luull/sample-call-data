import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpApiService } from '../service/http-api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-daftar-mitra',
  templateUrl: './daftar-mitra.page.html',
  styleUrls: ['./daftar-mitra.page.scss'],
})
export class DaftarMitraPage {
  mitra: any;
  constructor(
    private http: HttpClient,
    private httpApi: HttpApiService,
    private rtr: Router,
    public toastController: ToastController,


  ) {
    this.httpApi.getData().subscribe((value: any) => {
      console.log(value);
      this.mitra = value['data'];

    });


  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Underconstraction',
      duration: 2000

    });
    toast.present();
  }

}
