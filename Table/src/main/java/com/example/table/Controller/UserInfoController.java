/*
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
*/
package com.example.table.Controller;

import com.example.table.Model.Parse.UserInfo;
import com.example.table.Model.Serialiazable.SerializableUserInfo;
import com.example.table.Service.UserInfoService;
import org.parse4j.ParseUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/api/v1/userinfo")
public class UserInfoController {
    private UserInfoService userService;


    public UserInfoController(UserInfoService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String createUser(@RequestBody SerializableUserInfo user){
        return userService.addUser(user);
    }

   

}