import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['focus', 'count']

  connect() {
    super.connect()
  }

  submit(event) {
    event.preventDefault();
    this.stimulate("Todo#submit").then(() => {
      this.element.reset();
    });
  }

  edit(e) {
    e.preventDefault();
    this.stimulate("Todo#edit", e.currentTarget).then(() => {
      document.querySelector('#focus').focus();
    });
  }

  delete(event) {
    event.preventDefault();

    const ok = confirm("Deseja Excluir?")
    if (!ok) {
      return false;
    } else {
      this.stimulate("Todo#destroy", event.currentTarget);
    }
  }

  change(event) {
    event.preventDefault();
    this.stimulate("Todo#change", event.currentTarget)
  }

  toggle(event) {
    event.preventDefault();
    this.stimulate("Todo#toggle", event.currentTarget);
  }

  afterSubmit(event) {
    this.focusTarget.focus();
    this.focusTarget.textContent = '';
    document.querySelector('.text-success').hidden = true
  }
}
