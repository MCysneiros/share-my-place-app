import { Modal } from './Ui/modal';
import { Map } from './Ui/map';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  selectPlace(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
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
          this.selectPlace(coordinates);
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
