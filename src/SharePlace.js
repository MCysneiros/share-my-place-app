import { Modal } from './Ui/modal';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('location feature not available on your browser!!');
      return;
    } else {
      const modal = new Modal(
        'loading-modal-content',
        'Loading location please wait'
      );

      modal.show();
      navigator.geolocation.getCurrentPosition(
        (success) => {
          modal.hide();
          const coordinates = {
            lat: success.coords.latitude,
            lng: success.coords.longitude,
          };
          console.log(coordinates);
        },
        (error) => {
          alert('could not locate you , please enter a address manually ');
        }
      );
    }
  }
  findAddressHandler() {}
}

new PlaceFinder();
