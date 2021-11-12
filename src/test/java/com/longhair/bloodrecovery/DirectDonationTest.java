package com.longhair.bloodrecovery;

import com.longhair.bloodrecovery.domain.Applicant;
import com.longhair.bloodrecovery.domain.DirectDonation;
import com.longhair.bloodrecovery.dto.DirectDonationUpdateDto;
import com.longhair.bloodrecovery.repository.ApplicantRepository;
import com.longhair.bloodrecovery.repository.DirectDonationRepository;
import com.longhair.bloodrecovery.service.DirectDonationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@SpringBootTest
public class DirectDonationTest {
//    @Autowired
//    DirectDonationService directDonationService;
//
//    @Test
//    public void testInsertDummy(){
//        DirectDonation directDonation = new DirectDonation();
//        directDonation.setRequesterId(123L);
//        directDonation.setRequesterNickname("EhitEpit");
//        directDonation.setRequesterLevel(5);
//        directDonation.setTitle("제목");
//        directDonation.setContents("내용");
//        directDonation.setImage("이미지");
//        directDonation.setDate(new Date());
//        directDonation.setLocationSido(1);
//        directDonation.setLocationSigungu(2);
//        directDonation.setPeriodFrom(new Date());
//        directDonation.setPeriodTo(new Date(10000));
//        directDonation.setBloodType("A");
//        directDonation.setBloodMaxCount(5);
//        directDonation.setBloodCurrentCount(1);
//        directDonation.setCompleteStatus(false);
//        directDonation.setPatientName("나청일");
//        directDonation.setHospitalName("백병원");
//        directDonation.setRoomNumber("205");
//
//        Applicant applicant = new Applicant();
//        applicant.setApplicantNickname("pray");
//        applicant.setApplyStatus(false);
//
//        directDonationService.saveDirectDonation(directDonation);
//        directDonationService.saveApplicant(applicant, directDonation.getId());
//    }
//

//
//    @Test @Transactional
//    public void testUpdateData(){
//        DirectDonation directDonation = new DirectDonation();
//        directDonation.setRequesterId(123L);
//        directDonation.setRequesterNickname("EhitEpit");
//        directDonation.setRequesterLevel(5);
//        directDonation.setTitle("제목2222");
//        directDonation.setContents("내용2222");
//        directDonation.setImage("이미지2222");
//        directDonation.setDate(new Date());
//        directDonation.setLocationSido(0);
//        directDonation.setLocationSigungu(12);
//        directDonation.setPeriodFrom(new Date());
//        directDonation.setPeriodTo(new Date(10000));
//        directDonation.setBloodType("A");
//        directDonation.setBloodMaxCount(5);
//        directDonation.setBloodCurrentCount(1);
//        directDonation.setCompleteStatus(false);
//        directDonation.setPatientName("나청일");
//        directDonation.setHospitalName("백병원");
//        directDonation.setRoomNumber("205");
//
//        DirectDonationUpdateDto directDonationUpdateDto = new DirectDonationUpdateDto(directDonation);
//        directDonationUpdateDto.setId(1L);
//        directDonationService.updateDirectDonationById(directDonationUpdateDto);
//    }
}