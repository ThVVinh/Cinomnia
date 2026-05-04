package com.netflixclone.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;

import com.netflixclone.backend.dto.PurchaseRequest;
import com.netflixclone.backend.entity.Transaction;
import com.netflixclone.backend.entity.TransactionDetail;
import com.netflixclone.backend.service.TransactionDetailService;
import com.netflixclone.backend.service.TransactionService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/transactions")
public class TransactionController {
    private final TransactionService transactionService;
    private final TransactionDetailService transactionDetailService;

    public TransactionController(TransactionService transactionService, TransactionDetailService transactionDetailService) {
        this.transactionService = transactionService;
        this.transactionDetailService = transactionDetailService;
    }

    @GetMapping("/me")
    public List<Transaction> getMyTransactions(Authentication authentication) {
        String email = authentication.getName();
        return transactionService.getTransactionByUserEmail(email);
    }

    @GetMapping("/{userId}")
    public List<Transaction> getTransactionsByUserId(@PathVariable Integer userId) {
        return transactionService.getTransactionByUserId(userId);
    }
    
    @GetMapping("/{transactionId}/details")
    public List<TransactionDetail> getTransactionDetails(@PathVariable Integer transactionId) {
        return transactionDetailService.getDetailsByTransactionId(transactionId);
    }

    @PostMapping
    public ResponseEntity<?> purchase(
            @RequestBody PurchaseRequest request,
            Authentication authentication
    ) {
        String email = authentication.getName();

        transactionService.purchase(email, request.getMovieIds());

        return ResponseEntity.ok("Purchase success");
    }
}
