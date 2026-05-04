package com.netflixclone.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.netflixclone.backend.dto.CreditDTO;
import com.netflixclone.backend.entity.Credit;

@Repository
public interface CreditRepo extends JpaRepository<Credit, Integer> {
    @Query("""
        SELECT new com.netflixclone.backend.dto.CreditDTO(
            c.id,
            p.name,
            c.creditType,
            c.department,
            ca.characterName,
            cr.job
        )
        FROM Credit c
        JOIN c.people p
        LEFT JOIN Cast ca ON ca.credit.id = c.id
        LEFT JOIN Crew cr ON cr.credit.id = c.id
        WHERE c.movie.id = :movieId
    """)
    List<CreditDTO> findCreditsByMovieId(@Param("movieId") Integer movieId);
} 
