import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['focus', 'count']

  submit(event) {
    event.preventDefault();
    this.stimulate("Todo#create").then(() => {
      this.element.reset();
      this.focusTarget.focus();
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
