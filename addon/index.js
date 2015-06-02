var uuid = 1;

class EmberComponent {
  constructor() {
    this.elementId = 'es6-components-' + (uuid++);
    this._state = 'preRender';
    this.isComponent = true;
  }

  trigger() {
    console.log('trigger', arguments);
  }

  _transitionTo(newState) {
    this._state = newState;
  }

  destroy() {

  }

  static proto() {
    return this.prototype;
  }

  static create() {
    return new this(...arguments);
  }
}

EmberComponent.isComponentFactory = true;

export default EmberComponent;
