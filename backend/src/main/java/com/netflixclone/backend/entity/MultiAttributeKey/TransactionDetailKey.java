package com.netflixclone.backend.entity.MultiAttributeKey;

import java.io.Serializable;
import java.util.Objects;

public class TransactionDetailKey implements Serializable {
    private Integer transactionId;
    private Integer movieId;

    public TransactionDetailKey() {}

    public TransactionDetailKey(Integer transactionId, Integer movieId) {
        this.transactionId = transactionId;
        this.movieId = movieId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TransactionDetailKey)) return false;
        TransactionDetailKey that = (TransactionDetailKey) o;
        return Objects.equals(transactionId, that.transactionId) &&
               Objects.equals(movieId, that.movieId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(transactionId, movieId);
    }
}
