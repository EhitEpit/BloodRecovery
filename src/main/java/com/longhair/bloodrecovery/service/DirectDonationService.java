package com.longhair.bloodrecovery.service;

import com.longhair.bloodrecovery.domain.Applicant;
import com.longhair.bloodrecovery.domain.DirectDonation;
import com.longhair.bloodrecovery.dto.*;
import com.longhair.bloodrecovery.repository.ApplicantRepository;
import com.longhair.bloodrecovery.repository.DirectDonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DirectDonationService {
    @Autowired
    private DirectDonationRepository directDonationRepository;

    @Autowired
    private ApplicantRepository applicantRepository;

    @Transactional
    public ApplicantDto saveApplicant(Applicant applicant, Long id){
        Optional<DirectDonation> item = directDonationRepository.findById(id);
        if(item.isPresent()){
            applicant.setDirectDonation(item.get());
            item.get().getApplicants().add(applicant);
            directDonationRepository.save(item.get());
            applicantRepository.save(applicant);
        }
        return new ApplicantDto(applicant);
    }

    @Transactional(readOnly=true)
    public List<ApplicantDto> findApplicantAll(Long directId){
        List<ApplicantDto> list = new ArrayList<>();
        applicantRepository.findByDirectDonation_Id(directId).forEach(e -> list.add(new ApplicantDto(e)));
        return list;
    }

    //TODO
    // 지정헌혈 인증기능
    public void applyApplicant(Applicant applicant, Long id){

    }

    @Transactional(readOnly=true)
    public List<DirectDonationSimpleDto> findDirectDonationAll(){
        List<DirectDonationSimpleDto> directDonationSimpleDtos = new ArrayList<>();
        directDonationRepository.findAll().forEach(e -> directDonationSimpleDtos.add(new DirectDonationSimpleDto(e)));
        return directDonationSimpleDtos;
    }

    @Transactional(readOnly=true)
    public DirectDonationDto findDirectDonationById(Long id){
        return new DirectDonationDto(directDonationRepository.findById(id).orElseGet(DirectDonation::new));
    }

    @Transactional(readOnly=true)
    public PatientDto findPatientById(Long id){
        return new PatientDto(directDonationRepository.findById(id).orElseGet(DirectDonation::new));
    }

    @Transactional
    public void deleteDirectDonationById(Long id){
        Optional<DirectDonation> item = directDonationRepository.findById(id);
        List<Long> idList = new ArrayList<>();
        if(item.isPresent()){
            item.get().getApplicants().forEach(e -> idList.add(e.getId()));
            applicantRepository.deleteAllById(idList);
        }
        directDonationRepository.deleteById(id);
    }

    @Transactional
    public DirectDonation saveDirectDonation(DirectDonation directDonation){
        //Todo
        // 요청자 정보 가져오기
        directDonation.setRequesterNickname("이힛이핏");
        directDonation.setRequesterLevel(4);
        // 요청자 정보 가져오기===

        directDonation.setCompleteStatus(false);
        directDonationRepository.save(directDonation);
        return directDonation;
    }

    @Transactional
    public void updateDirectDonationById(DirectDonationUpdateDto directDonationUpdateDto){
        System.out.println(directDonationUpdateDto.getId());
        Optional<DirectDonation> e = directDonationRepository.findById(directDonationUpdateDto.getId());
        if(e.isPresent()){
            DirectDonation item = e.get();
            System.out.println("============================");
            item.setId(directDonationUpdateDto.getId());
            item.setRequesterId(directDonationUpdateDto.getRequesterId());
            item.setTitle(directDonationUpdateDto.getTitle());
            item.setContents(directDonationUpdateDto.getContents());
            item.setImage(directDonationUpdateDto.getImage());
            item.setDate(directDonationUpdateDto.getDate());
            item.setPeriodFrom(directDonationUpdateDto.getPeriodFrom());
            item.setPeriodTo(directDonationUpdateDto.getPeriodTo());
            item.setCompleteStatus(directDonationUpdateDto.getCompleteStatus());
            directDonationRepository.save(item);
        }
    }
}
