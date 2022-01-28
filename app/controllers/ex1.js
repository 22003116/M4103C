import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked content = 'Entrez votre texte';
  @tracked info = '';

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    if (this.size < 50) {
      if (this.size < 20) {
        return 'danger';
      }
      return 'warning';
    }
    return 'normal';
  }

  @action
  modification() {
    this.info = 'Note modifiée';
  }

  @action
  enregistrement() {
    this.info = 'Note sauvegardée';
  }

  @action
  destruction() {
    this.info = '';
  }
}
