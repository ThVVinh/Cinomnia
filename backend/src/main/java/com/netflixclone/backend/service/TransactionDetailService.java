package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.TransactionDetail;
import com.netflixclone.backend.entity.MultiAttributeKey.TransactionDetailKey;
import com.netflixclone.backend.repository.TransactionDetailRepo;

@Service
public class TransactionDetailService {
    private final TransactionDetailRepo transactionDetailRepo;

    public TransactionDetailService(TransactionDetailRepo transactionDetailRepo) {
        this.transactionDetailRepo = transactionDetailRepo;
    }

    public List<TransactionDetail> getDetailsByTransactionId(Integer transactionId) {
        return transactionDetailRepo.findByTransactionId(transactionId);
    }

    public TransactionDetail getTransactionDetailById(Integer transactionId, Integer movieId) {
        TransactionDetailKey key = new TransactionDetailKey(transactionId, movieId);
        return transactionDetailRepo.findById(key).orElse(null);
    }

    public TransactionDetail saveTransactionDetail(TransactionDetail transactionDetail) {
        return transactionDetailRepo.save(transactionDetail);
    }

    public void deleteTransactionDetail(Integer transactionId, Integer movieId) {
        TransactionDetailKey key = new TransactionDetailKey(transactionId, movieId);
        transactionDetailRepo.deleteById(key);
    }
}
