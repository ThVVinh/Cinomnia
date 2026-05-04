package com.netflixclone.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.netflixclone.backend.entity.Transaction;

@Repository
public interface TransactionRepo extends JpaRepository<Transaction, Integer> {
    List<Transaction> findByUserId(Integer userId);    
}
