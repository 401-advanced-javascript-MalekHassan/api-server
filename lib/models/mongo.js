'use strict';

/** Class representing a generic mongo model. */
class Collection {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Collection;
