package com.vansh.expensetracker.controller;

import com.vansh.expensetracker.dto.ExpenseDTO;
import com.vansh.expensetracker.entity.Expense;
import com.vansh.expensetracker.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public Expense addExpense(@Valid @RequestBody ExpenseDTO expenseDTO) {
        return expenseService.saveExpense(expenseDTO);
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @GetMapping("/{id}")
    public Expense getExpenseById(@PathVariable Long id) {
        return expenseService.getExpenseById(id);
    }

    @PutMapping("/{id}")
    public Expense updateExpense(
            @PathVariable Long id,
            @RequestBody Expense expense) {

        return expenseService.updateExpense(id, expense);
    }

    @DeleteMapping("/{id}")
    public String deleteExpense(@PathVariable Long id) {

        expenseService.deleteExpense(id);

        return "Expense deleted successfully with id: " + id;
    }
}