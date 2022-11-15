class ModalHandler{
 constructor(elementId){
    this.elementId = elementId;
    this.modalContainer = document.getElementById(this.elementId);
    this.closeButton = this.modalContainer.getElementsByClassName('modal-close-button')[0];
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.hide()
      });
    }
 }

 showModal(){
  if (this.modalContainer) {
    this.modalContainer.classList.add('open')
  }
 }
 hide(){
  if (this.modalContainer) {
    this.modalContainer.classList.remove('open')
  }
 }
}

export { ModalHandler };
