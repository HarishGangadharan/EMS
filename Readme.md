# Employee Management System

An employee management system consists of crucial work-related and important personal information about an employee. It consist of all the employee information and their associated project details.

  - Employee Information (Manager, Staff)
  - Project Information (Team Lead, Proj Employee Information (Manager, Staffect Staffs)

#  Description

  - Admin can able to create Employees based on their role and project.
  - Manager and admin has the ability to add or remove employees to a project.


Admin can also:
  - Crud operations for project and employees.
  - Add employees to project and assign their role in the project.
  - Re-Assign employees from one project to another.
  
### Tech

EMS uses a number of open source projects to work properly:


* [node.js] - evented I/O for the backend
* [MYSQL](https://www.npmjs.com/package/mysql) - Database for this application

And of course EMS itself is open source with a [public repository](https://github.com/HarishGangadharan/EMS)
 on GitHub.

### Installation

EMS requires [Node.js](https://nodejs.org/) v12.18.0 to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/HarishGangadharan/EMS.git
$ cd EMS
$ npm i
$ npm run start_dev (Based on the environment like dev)
```

For testing environments...

```sh
$ npm run start_test (Based on the environment like test)
```

### Dependencies

EMS is currently extended with the following packages. Instructions on how to use them in your own application are linked below.

| Package | npm |
| ------ | ------ |
| db-migrate-mysql| [https://www.npmjs.com/package/db-migrate-mysql] | 
| express | [https://www.npmjs.com/package/express]|
| mysql | [https://www.npmjs.com/package/mysql] |
| body-parser | [https://www.npmjs.com/package/body-parser] |
| helmet | [https://www.npmjs.com/package/helmet] |
| cors | [https://www.npmjs.com/package/cors] |
| mocha | [https://www.npmjs.com/package/mocha] |
| eslint | [https://www.npmjs.com/package/eslint] |

### Version
  - Node (v12.18.0)
  - NVM (0.30.2)
