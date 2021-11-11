package com.longhair.bloodrecovery.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String userId;
    private String password;
    private String name;
    private String nickname;
    private String personalNumber;
    private String profile;
    private int point;
    private int level;
    private int banLevel;
}