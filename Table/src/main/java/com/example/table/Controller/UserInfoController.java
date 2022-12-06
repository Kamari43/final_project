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




  /*  @GetMapping("/login")
    public SerializableUserInfo logIn(@RequestBody HashMap<String, String> obj) {
        SerializableUserInfo info = null;
        try {


            ParseUser user = ParseUser.logIn("kamari", "password");

            if (info != null) {
                info.setUserName(user.getUsername());
            }

        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        return info;

    }

    @GetMapping("/signup")
    public SerializableUserInfo signUp(@RequestBody HashMap<String, String> obj) {
        SerializableUserInfo info = null;

        ParseUser user = new ParseUser();
        user.setUsername("my name");
        user.setPassword("my pass");
        user.setEmail("email@example.com");

        user.signUp

                 {
            public void done(ParseException e) {
                if (e == null) {
                    // Hooray! Let them use the app now.
                } else {
                    // Sign up didn't succeed. Look at the ParseException
                    // to figure out what went wrong
                }
            }
        });


        return signUp;

    }

   */
}