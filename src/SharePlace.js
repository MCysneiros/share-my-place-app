import { Modal } from './Ui/modal';
import { Map } from './Ui/map';
import { getCoordsFromAddress, getAddressFromCoords } from './Utility/location';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    this.shareBtn.addEventListener('click', this.sharePlaceHandler);
  }

  sharePlaceHandler() {
    const shareLinkInput = document.getElementById('share-link');
    if (!navigator.clipboard) {
      shareLinkInput.select();
      return;
    }
    navigator.clipboard
      .writeText(shareLinkInput.value)
      .then(() => {
        alert('copied to clipboard');
      })
      .catch((err) => {
        alert(err);
      });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    this.shareBtn.disabled = false;
    const shareLinkInput = document.getElementById('share-link');
    shareLinkInput.value = `${location.origin}/my-place?address=${encodeURI(
      address
    )}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
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
        async (success) => {
          const coordinates = {
            lat: success.coords.latitude,
            lng: success.coords.longitude,
          };
          const address = await getAddressFromCoords(coordinates);
          modal.hide();
          this.selectPlace(coordinates, address);
        },
        (error) => {
          alert('could not locate you , please enter a address manually ');
        }
      );
    }
  }
  async findAddressHandler(event) {
    event.preventDefault();

    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Please enter a valid address');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location please wait'
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (err) {
      alert(err.message);
    }
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
