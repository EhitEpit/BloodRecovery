package com.longhair.bloodrecovery;

import com.longhair.bloodrecovery.domain.Rank;
import com.longhair.bloodrecovery.domain.RankRenew;
import com.longhair.bloodrecovery.service.RankService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
@Slf4j
@RequiredArgsConstructor
public class Scheduler {

    @Autowired
    private final RankService rankService;

    //User에서 포인트로 1시간마다 정렬된 데이터 받아옴 통째로!
//    @Scheduled(cron = "0 0 0/1 * * *")//1시간마다 갱신
    @Scheduled(cron = "0 0/10 * * * *")//10분마다 갱신
    //==========RestTemplate===========//\
    public void RankRenewApi() {
        RestTemplate rt = new RestTemplate();
        RankRenew[] list = rt.getForObject("http://15.164.153.191:8000/data/", RankRenew[].class);
        //나중에 User url로 바꿔야함~_~

        //Rank 데이터 전체 삭제
        rankService.deleteAll();

        for (int i = 0; i < list.length; i++)  {
            RankRenew rr = list[i]; //배열로
            Rank r = new Rank(rr);
            rankService.save(rr); //RankRenew로 저장
            rankService.save(r); //Rank로 저장
        }
    }
}

