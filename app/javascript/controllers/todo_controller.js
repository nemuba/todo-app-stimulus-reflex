import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['focus', 'count']

  submit(event) {
    event.preventDefault();
    this.stimulate("Todo#submit").then(() => {
      this.element.reset();
      this.focusTarget.focus();
    });
  }

  edit(e) {
    e.preventDefault();

    const btn_id = `#${e.target.id}`;

    this.stimulate("Todo#edit", e.currentTarget).then(() => {
      document.querySelector('#focus').focus();
      // document.querySelector('#todos').hidden = true;
    });
  }

  delete(event) {
    event.preventDefault();
    this.stimulate("Todo#destroy", event.currentTarget);
  }

  toggle(event) {
    event.preventDefault();
    this.stimulate("Todo#toggle", event.currentTarget);
  }

  afterSubmit(event) {
    this.focusTarget.focus();
  }
}
