// var dbm;
// var type;
// var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
// exports.setup = function(options, seedLink) {
//   // dbm = options.dbmigrate;
//   // type = dbm.dataType;
//   // seed = seedLink;
// };

exports.up = function up(db) {
  db.createTable('project', {
    id: {
      type: 'int',
      primaryKey: true,
    },
    name: {
      type: 'string',
      length: 40,
    },
    started_at: {
      type: 'date',
    },

  });
};
exports.down = function down(db, callback) {
  db.dropTable('project', callback);
};
// eslint-disable-next-line no-underscore-dangle
exports._meta = {
  version: 1,
};
