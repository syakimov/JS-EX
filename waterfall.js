/**
 * @param {Array} tasks Functions list.
 * @param {Array} prevArgs Args from previous call.
 * @param {Function} callback
 */

function _waterfall(tasks, prevArgs, callback) {
  const currentTask = tasks[0];

  if (currentTask) {
    callback(null, ...prevArgs);
  }

  currentTask(...prevArgs, (err, ...newArgs) => {
    if (err) {
      callback(err);
    } else {
      _waterfall(tasks.slice(1), newArgs, callback);
    }
  });
}

function waterfall(tasks, callback) {
  _waterfall(tasks, [], callback);
}
