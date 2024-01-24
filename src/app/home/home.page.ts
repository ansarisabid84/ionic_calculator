import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, removeOutline, closeOutline, arrowBackOutline, reorderTwoOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonButton, IonInput, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({add, removeOutline, closeOutline, arrowBackOutline, reorderTwoOutline});
  }

  display: string = '0';
  zeroRegex: RegExp = /^[0]+$/;
  operatorMatch: RegExp = /[+\-*.\/]/;

  appendToDisplay(value: string) {
    if(this.display == '0') {
      if(this.zeroRegex.test(value)) {
        value = '0';
      }
      if(!this.operatorMatch.test(value)) {
        this.display = '';
      }
    }

    if(this.operatorMatch.test(value)) {
      this.validateLastElement();
    }
    this.display += value;
  }

  clearDisplay() {
    this.display = '0';
  }

  calculate() {
    try {
      this.validateLastElement();
      this.display = (0, eval)(this.display).toString();
    } catch (error) {
      this.display = 'Error';
    }
  }

  backspace() {
    if(this.display.length == 1){
      this.display = '0';
    } else {
      this.display = this.display.slice(0, -1);
    }
  }

  validateLastElement() {
    if(this.operatorMatch.test(this.display.slice(-1))) {
      this.backspace();
    }
  }
}
