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
import com.example.table.Model.Serialiazable.SerializableUserInfo;
import com.example.table.Service.UserInfoService;
import org.parse4j.ParseException;
import org.parse4j.ParseUser;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/v1/userinfo")
public class UserInfoController {
    private UserInfoService userService;


    public UserInfoController(UserInfoService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String createUser(@RequestBody SerializableUserInfo user) {
        return userService.addUser(user);
    }





   @GetMapping("/login")

   @PostMapping ("/login")

    public SerializableUserInfo logIn(@RequestBody HashMap<String, String> obj) {

       SerializableUserInfo info = new SerializableUserInfo();

       ParseUser user = null;
       try {
           user = ParseUser.logIn(obj.get("username"), obj.get("password"));
           if(user== null) {

           }else {

           }
       } catch (ParseException e) {
           throw new RuntimeException(e);
       }




        return info;

    }


    @PostMapping("/register")
    public SerializableUserInfo signUp(@RequestBody HashMap<String, String> obj) {
        SerializableUserInfo info = null;

        ParseUser user = new ParseUser();
        user.setUsername(obj.get("username"));
        user.setPassword(obj.get("password"));
        user.setEmail(obj.get("email@example.com"));

        try {
            user.signUp();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }


        return info;

    }


}