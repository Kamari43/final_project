package com.example.table.services;

import com.example.table.models.parse.UserInfo;
import com.example.table.models.serializable.SerializableUserInfo;

public class UserInfoService {
    public String addUserInfo(SerializableUserInfo userInfo)
    {
        String message;

        UserInfo parseUser = new UserInfo(); //Parse User Object

        parseUser.setName(userInfo.getName());
        parseUser.setPhoneNumber(userInfo.getPhoneNumber());
        parseUser.setEmail(userInfo.getEmail());
        parseUser.setUserName(userInfo.getUserName());
        parseUser.setPassword(userInfo.getPassword());

        parseUser.save(); //runs the query to insert the new value
        message = "User Added"; //sets the success return message

        return message;
    }
}
