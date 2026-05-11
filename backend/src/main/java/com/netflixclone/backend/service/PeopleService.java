package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.People;
import com.netflixclone.backend.repository.PeopleRepo;

@Service
public class PeopleService {
    private final PeopleRepo peopleRepo;

    public PeopleService(PeopleRepo peopleRepo) {
        this.peopleRepo = peopleRepo;
    }

    public List<People> getAllPeople() {
        return peopleRepo.findAll();
    }

    public People getPeopleById(Integer id) {
        return peopleRepo.findById(id).orElse(null);
    }
}
