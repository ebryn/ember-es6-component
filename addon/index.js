var uuid = 1;

class EmberComponent {
  constructor() {
    this.elementId = 'es6-components-' + (uuid++);
    this.isComponent = true;
  }

  trigger() {
    console.log('trigger', arguments);
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
