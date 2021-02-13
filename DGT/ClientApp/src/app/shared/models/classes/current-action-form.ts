import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export class CurrentActionForm {
  public modalRef: NgbModalRef;
  public valid = true;

  public close() {
    this.modalRef.close();
  }
}
