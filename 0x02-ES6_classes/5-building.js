export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Building cannot be instantiated directly');
    }

    this._sqft = sqft;

    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Method evacuationWarningMessage() must be implemented');
  }
}
