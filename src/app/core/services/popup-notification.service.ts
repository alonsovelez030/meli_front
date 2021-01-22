import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PopUpEntity {
  lnTitle?: string;
  lnContent?: string;
  lnOkText: string;
  lnCancelText: string;
}

@Injectable({
  providedIn: 'root'
})
export class PopUpNotificationService {

  constructor() {
    const element = document.createElement('div');
    element.setAttribute('id', 'notification-container');
    document.body.appendChild(element);
  }

  public confirmPopup(values: PopUpEntity): Promise<any> {
    const element = `
      <div id="parent-confirm" class="ml-confirm">
        <div class="ml-wrapper-box"></div>
        <div class="ml-confirm-box">
          <div class="ml-confirm-content">
            <div class="ml-confirm-header">
              <h4 class="regular">${values?.lnTitle}</h4>
              <h5 class="mt-2 light">${values?.lnContent}</h5>
            </div>
            <div class="btn-group mt-20">
              <button class="ml-btn btn-secondary p-2" id="onclickok"><span>${values?.lnOkText}</span></button>
              <button class="ml-btn btn-outline-primary ml-3 p-2" id="onclickcancel"><span>${values?.lnCancelText}</span></button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', element);
    return this.resolver({success: 'onclickok', cancel: 'onclickcancel'});
  }

  private resolver(element: {success: string; cancel: string}): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.handelActions(element.success, resolve);
      this.handelActions(element.cancel, reject);
    });
    return promise;
  }

  private handelActions(element, action) {
    document.getElementById(element).addEventListener('click', () => {
      action();
      const IdElement = document.getElementById('parent-confirm');
      IdElement.parentNode.removeChild(IdElement);
    });
  }

  private createNotification(message, status) {
    const idNotification = `notification-${Math.floor((Math.random() * 1000) + 1)}`;
    const parentElement = document.getElementById('notification-container');
    const element = `
      <div id="${idNotification}" class="ml-notification mt-10">
        <span class="ml-3 light ${status}">${message || 'Error'}</span>
      </div>
    `;

    parentElement.insertAdjacentHTML('afterbegin', element);

    setTimeout(() => {
      const IdElement = document.getElementById(idNotification);
      IdElement.parentNode.removeChild(IdElement);
    }, 5000);
  }

  public error(message: string) {
    this.createNotification(message, 'error');
  }

  public info(message: string) {
    this.createNotification(message, 'info');
  }

  public success(message: string) {
    this.createNotification(message, 'success');
  }

}
