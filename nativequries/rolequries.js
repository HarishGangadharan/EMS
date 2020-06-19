const roleSelectAll = 'select * from role';
const roleCreate = 'insert into role SET name = :name';
const roleUpdate = 'update role SET name = :name where id = :id';
const roleDelete = 'delete from  role where id = :id';
const roleSelect = 'select * from  role where id = :id';

module.exports = {
  roleSelectAll,
  roleCreate,
  roleUpdate,
  roleDelete,
  roleSelect,
};
