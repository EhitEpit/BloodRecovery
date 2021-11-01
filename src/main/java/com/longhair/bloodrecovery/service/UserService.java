package com.longhair.bloodrecovery.service;

import com.longhair.bloodrecovery.domain.Clause;
import com.longhair.bloodrecovery.domain.ClauseBreakdown;
import com.longhair.bloodrecovery.repository.ClauseBreakdownRepository;
import com.longhair.bloodrecovery.repository.ClauseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    ClauseRepository clauseRepository;

    @Autowired
    ClauseBreakdownRepository clauseBreakdownRepository;

    public List<Clause> getClauseList(){
        return clauseRepository.findAll();
    }

    public ClauseBreakdown postClauseBreakdown(ClauseBreakdown clauseBreakdown){
        clauseBreakdownRepository.save(clauseBreakdown);
        return clauseBreakdown;
    }
}
