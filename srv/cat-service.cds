using { sap.com.employeeRecord as my } from '../db/schema';
service CatalogService @(path:'/browse') {
entity Employee as SELECT from my.employee;
}