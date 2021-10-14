export class Modal {
  constructor(contentId) {
    this.fallbackText = fallbackText;
    this.contentTemplateElement = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  show() {
    if ('content' in document.createElement('template')) {
      const modalContent = document.importNode(
        this.modalTemplateEl.content,
        true
      );

      const modalElement = modalContent.querySelector('.modal');
      const backdropElement = modalContent.querySelector('.backdrop');

      const contentElement = document.importNode(
        this.contentTemplateElement.content,
        true
      );

      modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', modalElement);
      document.body.insertAdjacentElement('afterbegin', backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }
  hide() {}
}
