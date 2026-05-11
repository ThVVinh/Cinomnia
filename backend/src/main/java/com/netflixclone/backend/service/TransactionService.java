package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.Movie;
import com.netflixclone.backend.entity.OwnedMovie;
import com.netflixclone.backend.entity.Transaction;
import com.netflixclone.backend.entity.TransactionDetail;
import com.netflixclone.backend.entity.User;
import com.netflixclone.backend.enums.TransactionStatus;
import com.netflixclone.backend.repository.OwnedMovieRepo;
import com.netflixclone.backend.repository.TransactionDetailRepo;
import com.netflixclone.backend.repository.TransactionRepo;

import jakarta.transaction.Transactional;

@Service
public class TransactionService {
    private final TransactionRepo transactionRepo;
    private final UserService userService;
    private final MovieService movieRepo;
    private final TransactionDetailRepo detailRepo;
    private final OwnedMovieRepo ownedMovieRepo;

    public TransactionService(TransactionRepo transactionRepo, UserService userService, MovieService movieRepo, TransactionDetailRepo detailRepo, OwnedMovieRepo ownedMovieRepo) {
        this.transactionRepo = transactionRepo;
        this.userService = userService;
        this.movieRepo = movieRepo;
        this.detailRepo = detailRepo;
        this.ownedMovieRepo = ownedMovieRepo;
    }

    public Transaction getTransactionById(Integer id) {
        return transactionRepo.findById(id).orElse(null);
    }

    public List<Transaction> getTransactionByUserEmail(String email) {
        User user = userService.getUserByEmail(email);

        return transactionRepo.findByUserId(user.getId());
    }

    public List<Transaction> getTransactionByUserId(Integer userId) {
        return transactionRepo.findByUserId(userId);
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepo.findAll();
    }

    @Transactional
    public void purchase(String email, List<Integer> movieIds) {
        User user = userService.getUserByEmail(email);

        List<Movie> movies = movieRepo.getMoviesByIds(movieIds);

        Transaction transaction = new Transaction();
        transaction.setUserId(user.getId());
        transaction.setTotalAmount(movies.stream().mapToDouble(Movie::getPrice).sum());
        transactionRepo.save(transaction);

        try{
            for (Movie movie : movies) {
                TransactionDetail detail = new TransactionDetail();                
                detail.setTransactionId(transaction.getId());
                detail.setMovieId(movie.getId());
                detail.setPrice(movie.getPrice());
                detailRepo.save(detail);

                OwnedMovie ownedMovie = new OwnedMovie();
                ownedMovie.setUserId(user.getId());
                ownedMovie.setMovieId(movie.getId());
                ownedMovieRepo.save(ownedMovie);
            }
            
            transaction.setStatus(TransactionStatus.COMPLETED);
        }
        catch(Exception e) {
            transaction.setStatus(TransactionStatus.FAILED);
            throw e;
        }


    }
}
