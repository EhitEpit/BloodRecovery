package com.longhair.bloodrecovery.controller;

import com.longhair.bloodrecovery.dto.SearchData;
import com.longhair.bloodrecovery.domain.Applicant;
import com.longhair.bloodrecovery.domain.DirectDonation;
import com.longhair.bloodrecovery.dto.*;
import com.longhair.bloodrecovery.service.DirectDonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class DirectDonationController {
    @Autowired
    DirectDonationService directDonationService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<DirectDonationSimpleDto>> getUserDirecteds(@PathVariable("userId")String userId){
        return new ResponseEntity<>(directDonationService.findUserDirecteds(userId), HttpStatus.OK);
    }
    @GetMapping("")
    public ResponseEntity<List<DirectDonationSimpleDto>> getDirecteds(SearchData searchData){
        return new ResponseEntity<>(directDonationService.findDirectDonationAll(searchData), HttpStatus.OK);
    }

    @GetMapping("/directedItem/{id}")
    public ResponseEntity<DirectDonationDto> getDirectedItem(@PathVariable("id") Long id){
        return new ResponseEntity<>(directDonationService.findDirectDonationById(id), HttpStatus.OK);
    }

    @PutMapping("/directedItem/{id}")
    public void putDirectedItem(@RequestBody DirectDonationUpdateDto directDonationUpdateDto, @PathVariable("id") Long id){
        directDonationUpdateDto.setId(id);
        directDonationService.updateDirectDonationById(directDonationUpdateDto);
    }

    @DeleteMapping("/directedItem/{id}")
    public void deleteDirectedItem(@PathVariable("id") Long id){
        directDonationService.deleteDirectDonationById(id);
    }

    @PostMapping("/directedItem")
    public ResponseEntity<DirectDonation> postDirectedItem(@RequestBody DirectDonation directDonation){
        return new ResponseEntity<>(directDonationService.saveDirectDonation(directDonation), HttpStatus.OK);
    }

    @GetMapping("/directedItem/{id}/patient")
    public ResponseEntity<PatientDto> getPatient(@PathVariable("id") Long id){
        return new ResponseEntity<>(directDonationService.findPatientById(id), HttpStatus.OK);
    }

    @GetMapping("/directedItem/{id}/applicants")
    public ResponseEntity<List<ApplicantDto>> getApplicants(@PathVariable("id") Long id){
        return new ResponseEntity<>(directDonationService.findApplicantAll(id), HttpStatus.OK);
    }

    @PostMapping("/directedItem/{id}/applicant")
    public ResponseEntity<ApplicantDto> postApplicant(@RequestBody Applicant applicant, @PathVariable("id") Long id){
        return new ResponseEntity<>(directDonationService.saveApplicant(applicant, id), HttpStatus.OK);
    }

    @PostMapping("/directedItem/{id}/apply")
    public String postApply(@PathVariable("id") Long id){
        directDonationService.applyApplicant(new Applicant(), id);
        return null;
    }

}