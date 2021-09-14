package com.work.calculator.controller;

import com.work.calculator.model.Record;
import com.work.calculator.model.Transaction;
import com.work.calculator.service.CalculateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin
public class CalculatorController {
    public CalculateService calculateService;

    @Autowired
    public CalculatorController(CalculateService calculateService) {
        this.calculateService = calculateService;
    }

    @PostMapping("/calculate")
    public ResponseEntity<?> calculate(@RequestBody List<Transaction> transactionList) {
        List<Record> records = calculateService.calculate(transactionList);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }


}
