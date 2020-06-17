/* eslint-disable no-param-reassign */
function addTimeStamp(data) {
  if (!data.created_at) {
    data.created_at = new Date();
  }
}
function timestamp(req, res, next) {
  if (req.method === 'PUT' || req.method === 'POST' || req.method === 'PATCH') {
    if (Array.isArray(req.body)) {
      req.body.map((data) => addTimeStamp(data));
    } else {
      addTimeStamp(req.body);
    }
  }
  next();
}

module.exports = timestamp;
