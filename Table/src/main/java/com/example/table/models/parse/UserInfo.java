package com.example.table.models.parse;

import com.example.table.models.serializable.SerializableUserInfo;
import org.parse4j.ParseClassName;
import org.parse4j.ParseObject;

@ParseClassName("UserInfo")
public class UserInfo extends ParseObject {
    private String Name;
    private String PhoneNumber;
    private String Email;
    private String UserName;
    private String Password;

    public UserInfo() {
    }

    public String getName(){
        return getString(Name);
    }
    public void setName(String name){
        put(Name,name);
    }

    //Assessor and Manipulator PhoneNumber
    public int getPhoneNumber(){
        return getInt(PhoneNumber);
    }
    public void setPhoneNumber(int phonenumber){
        put(PhoneNumber,phonenumber);
    }

    //Assessor and Manipulator Email
    public String getEmail(){
        return getString(Email);
    }
    public void setEmail(String email){
        put(Email,email);
    }

    //Assessor and Manipulator Username
    public String getUserName(){
        return getString(UserName);
    }
    public void setUserName(String username){
        put(UserName,username);
    }

    //Assessor and Manipulator Password
    public String getPassword(){
        return getString(Password);
    }
    public void setPassword(String password){
        put(Password,password);
    }

    public SerializableUserInfo getSerializable(){
        return new SerializableUserInfo(
                getName(), getPhoneNumber(), getEmail()
                , getUserName(), getPassword()
        );
    }

    public void save() {

    }


}
