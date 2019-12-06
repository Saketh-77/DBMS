use EmployeeDB;

-- create table `employee` (
-- `empid` int(11) not null auto_increment,
-- `name` varchar(45) default null,
-- `empcode` varchar(45) default null,
-- `salary` int(11) default null,
-- primary key(`empid`)
-- ) engine = innodb auto_increment=0 default charset=utf8mb4 collate=utf8mb4_0900_ai_ci;

lock tables `employee` write;
insert into `employee` values (1,'Galvin Cortez','emp90',265400),
							  (2,'Ouinn Flinn','emp94',364600),
                              (3,'Doris Wilder','emp06',316400),
                              (4,'Hermoine Buffer','emp965',417500);
unlock tables;