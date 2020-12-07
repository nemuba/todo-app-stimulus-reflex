import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['focus']

  connect () {
    super.connect()
    this.focusTarget.focus()
  }

  async delete(event) {
    event.preventDefault();
    event.stopPropagation();

    this.showLoading();
    await this.stimulate("Todo#delete", event.currentTarget);
    this.hideLoading();
    this.focusTarget.focus()
  }

  async toggle(event) {
    event.preventDefault();
    event.stopPropagation();

    this.showLoading();
    await this.stimulate("Todo#toggle", event.currentTarget).then(payload => console.log(payload));
    this.hideLoading();
    this.focusTarget.focus()
  }

  async create(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    this.showLoading();
    await this.stimulate("Todo#create", event.currentTarget);
    this.hideLoading();
    form.reset();

    this.focusTarget.focus()
  }

  showLoading() {
    document.body.classList.add("wait");
  }

  hideLoading() {
    document.body.classList.remove("wait");
  }
}
