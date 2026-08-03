package com.vansh.expensetracker.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private Double amount;

    private String category;

    private LocalDate date;

    private String description;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;


    public Expense() {
    }


    public Expense(Long id, String title, Double amount, String category,
                   LocalDate date, String description,
                   LocalDateTime createdAt, LocalDateTime updatedAt) {

        this.id = id;
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.date = date;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }


    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}