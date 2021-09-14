package com.work.calculator.service;

import com.work.calculator.model.Record;
import com.work.calculator.model.Transaction;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CalculateService {
    Map<String, int[]> cnt = new HashMap<>();
    public List<Record> calculate(List<Transaction> transactionList) {
        List<Record> records = new ArrayList<>();
        for (Transaction transaction: transactionList) {
            String userId = transaction.getUserId();

            cnt.computeIfAbsent(userId, param -> new int[13]);

            // index 1 ~ 12 refer to Jan. ~ Dec.
            // index 0 refers to the total
            int[] years = cnt.get(userId);

            // get the month of the transaction
            Date date = transaction.getDate();
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);
            int month = calendar.get(Calendar.MONTH) + 1;

            // update the map
            int reward = getReward(transaction.getAmount());
            years[month] += reward;
            years[0] += reward;
        }

        for (Map.Entry<String, int[]> entry: cnt.entrySet()) {
            records.add(new Record(entry.getKey(), entry.getValue()));
        }
        return records;
    }

    public int getReward(int amount) {
        int reward = 0;

        if (amount > 100) {
            reward += 50;
            reward += (amount - 100) * 2;
        } else if (amount > 50) {
            reward += amount - 50;
        }

        return reward;
    }
}
