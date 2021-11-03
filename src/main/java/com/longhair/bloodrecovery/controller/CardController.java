package com.longhair.bloodrecovery.controller;

import com.longhair.bloodrecovery.domain.Card;
import com.longhair.bloodrecovery.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor

public class CardController {
    @Autowired
    private CardService cardService;

    //헌혈증 조회
    @GetMapping("/bloodpocket/{id}")
    public List<Card> cards(@PathVariable("id") Long id) {
        return cardService.findCards(id);
    }

    //헌혈증 소유자 변경
    @PutMapping("/card/{id}/{userid}")
    @ResponseBody
    public Card putCardItem(@PathVariable("id") Long id, @PathVariable("userid") Long userid){
        return cardService.updateCard(id, userid);
    }



    //    //헌혈증 전체조회
//    @GetMapping("/bloodpocket/{id}")
//    public List<Card> cards() {
//        return cardService.findCards();
//    }

    //헌혈증추가1 -> 이미지첨부, OCR
    @PostMapping("/bloodpocket/{id}")
    public Card save(@RequestBody Card card, @PathVariable("id") Long id) {

        return cardService.save(card, id);
    }






//    @GetMapping("/bloodpocket/{id}")
//    public String list(Model model) {
//        List<Card> cards = cardService.findAll();
//        model.addAttribute("cards",cards);
//        return "cards/cardList";
//    }


}