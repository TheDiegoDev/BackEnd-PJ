"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var taskSchema = new _mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  foto: {
    type: String
  },
  descripcion: {
    type: String
  },
  precio: {
    type: String
  },
  primero: {
    type: String
  },
  segundo: {
    type: String
  }
}, {
  versionKey: false
});
taskSchema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)('Task', taskSchema);

exports["default"] = _default;