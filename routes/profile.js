var crud = require("../modules/crud");

exports.read = function(req, res){
  if (req.query.limit || req.query.page) {
    crud.paginate(req, res);
  }
  else {
    crud.read(req, res);
  }
}

exports.create = function(req, res){
  req._doc = req.__model.toDoc(req.body);
  crud.create(req, res);
}

exports.update = function(req, res){
  crud.update(req, res);
}

exports.delete = function(req, res){
  crud.delete(req, res);
}
