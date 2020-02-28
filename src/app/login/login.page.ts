import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpApiService } from '../service/http-api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string;
  password: string;
  data: any;
  name: any;
  constructor(
    private http: HttpClient,
    private httpApi: HttpApiService,
    private rtr: Router,
    public toastController: ToastController,


  ) {
    this.httpApi.getDataLogin().subscribe((value: any) => {
      console.log(value);
      this.data = value;

    });
  }
  async prosesLogin() {
    if (this.username != "" && this.password != "") {
      let body = {
        username: this.username,
        password: this.password,
        aksi: LoginPage,
      };
      this.httpApi.getData().subscribe((value: any) => {
        console.log(value);
        this.data = value;

      });
      if (this.data.success) {

        this.rtr.navigate(['/home']);
        const toast = await this.toastController.create({
          message: 'login berhasil',
          duration: 2000
        });
        toast.present();

      } else {
        const toast = await this.toastController.create({
          message: 'login gagal',
          duration: 2000
        });
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Username Password salah',
        duration: 2000
      });
    }
  }
}
