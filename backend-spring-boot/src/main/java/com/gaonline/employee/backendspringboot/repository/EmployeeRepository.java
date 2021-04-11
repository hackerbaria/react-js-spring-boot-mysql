package com.gaonline.employee.backendspringboot.repository;


import com.gaonline.employee.backendspringboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
