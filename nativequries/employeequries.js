const employeeSelectAll = 'select * from employee';
const roleSelectAll = 'select * from role';
const employeeCreate = 'insert into employee SET first_name = :first_name, last_name = :last_name, mobile = :mobile, email = :email, dob = :dob, created_at = :created_at, role_id = :role_id';
const employeeUpdate = 'update employee SET first_name = :first_name, last_name = :last_name, mobile = :mobile, email = :email, dob = :dob,role_id = :role_id where id = :id';
const employeeDelete = 'delete from  employee where id = :id';
const employeeSelect = 'select * from  employee where id = :id';

module.exports = {
  employeeSelectAll,
  roleSelectAll,
  employeeCreate,
  employeeUpdate,
  employeeDelete,
  employeeSelect,
};
