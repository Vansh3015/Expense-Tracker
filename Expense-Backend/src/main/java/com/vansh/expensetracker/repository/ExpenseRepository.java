package com.vansh.expensetracker.repository;

import com.vansh.expensetracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}