import { Component, inject } from '@angular/core';
import { App } from '@capacitor/app';
import { IonApp, IonRouterOutlet, Platform, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private platform = inject(Platform);
  private toastController = inject(ToastController);
  
  constructor() {
    var backButtonCount: number = 1;
    this.platform.backButton.subscribeWithPriority(10, async () => {
      if (backButtonCount--) {
        this.presentToast("Press back again to exit");
        setTimeout(() => {
          backButtonCount = 1;
        }, 3000);
      } else
        App.exitApp();
    });
  }

  async presentToast(message: string, duration = 2500) {
    const toast = await this.toastController.create({
      cssClass: 'back-button-toast-custom-class',
      message: message,
      duration: duration,
      mode: "ios",
      position: "top",
    });
    toast.present();
  }
  
}
