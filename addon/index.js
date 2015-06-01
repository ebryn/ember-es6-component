var uuid = 1;

class EmberComponent {
  constructor() {
    this.elementId = 'e6-components-' + (uuid++);
  }

  trigger() {
    console.log('trigger', arguments);
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
