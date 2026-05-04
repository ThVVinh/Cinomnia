package com.netflixclone.backend.entity;


import com.netflixclone.backend.entity.MultiAttributeKey.TransactionDetailKey;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@IdClass(TransactionDetailKey.class)
@Table(name = "transaction_detail")
public class TransactionDetail {
    @Id
    @Column(name = "transaction_id")
    private Integer transactionId;

    @Id
    @Column(name = "movie_id")
    private Integer movieId;

    @ManyToOne
    @JoinColumn(name = "movie_id", insertable = false, updatable = false)
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "transaction_id", insertable = false, updatable = false)
    private Transaction transaction;

    @Column(name = "price")
    private Double price;
    
    public Integer getMovieId() {
        return movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public Integer getTransactionId() {
        return transactionId;
    }
    public void setTransactionId(Integer transactionId) {
        this.transactionId = transactionId;
    }
    
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }

}
