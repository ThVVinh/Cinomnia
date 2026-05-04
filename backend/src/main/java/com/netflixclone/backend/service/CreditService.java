package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.netflixclone.backend.dto.CreditDTO;
import com.netflixclone.backend.repository.CreditRepo;

@Service
public class CreditService {
    private final CreditRepo creditRepo;

    public CreditService(CreditRepo creditRepo) {
        this.creditRepo = creditRepo;
    }

    public List<CreditDTO> getCreditsByMovieId(Integer movieId){
        return creditRepo.findCreditsByMovieId(movieId);
    }
}
