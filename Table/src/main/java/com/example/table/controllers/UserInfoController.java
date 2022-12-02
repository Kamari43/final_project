package com.example.table.controllers;

import com.example.table.models.serializable.SerializableUserInfo;
import com.example.table.services.UserInfoService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class UserInfoController {
    private UserInfoService userService;

    public ControllerUserInfo(UserInfoService userService) {
        this.userService = userService;
    }

    public SerializableUserInfo getUsersById(@PathVariable String id){
        return userService.getUsersById(id).getSerializable();
    }

    @PostMapping("/")
    public String createUser (@RequestBody SerializableUserInfo user){
        return userService.addUser*(user);
    }
}
