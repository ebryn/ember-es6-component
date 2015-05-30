class EmberComponent {
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