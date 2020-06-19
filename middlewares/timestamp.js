/* eslint-disable no-param-reassign */
function addTimeStamp(data) {
  if (!data.created_at) {
    const datetime = new Date();
    data.created_at = datetime.toISOString().slice(0, 10);
  }
}

/**
 * Middleware function that appends created_at, updated_at.
 *
 * @param req  Request Object.
 * @param res  Response Object.
 * @param next execution stops after triggering the callback.
 */
function timestamp(req, res, next) {
  if (req.method === 'POST') {
    if (Array.isArray(req.body)) {
      req.body.map((data) => addTimeStamp(data));
    } else {
      addTimeStamp(req.body);
    }
  }
  next();
}

module.exports = timestamp;
