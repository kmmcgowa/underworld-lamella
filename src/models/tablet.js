/**
 * The Tablet class models the standard Getty Art Object
 * It is used as an abstraction layer from the standard config.
 * For Development, it will be supplied dummy data.
 */

export default class Tablet {
  constructor (jsonManifest) {
    Object.assign(this, jsonManifest)
  }
}
