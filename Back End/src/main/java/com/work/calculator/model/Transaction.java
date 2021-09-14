package com.work.calculator.model;

import lombok.Data;

import java.util.Date;

@Data
public class Transaction {
    private String userId;
    private int amount;
    private Date date;
}
