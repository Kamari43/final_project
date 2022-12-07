/*
package com.example.table.models.serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SerializableUserInfo {
    private String name;
    private String phonenumber;
    private String email;
    private String username;
    private String password;

    public int getPhoneNumber() {
        return phonenumber;
    }

    public void setPhoneNumber(int phonenumber) {
        phonenumber = ph;
    }

    public String getUserName() {
        return username;
    }
}
*/
package com.example.table.Model.Serialiazable;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class SerializableUserInfo {
    private String name;
    private String phoneNumber;
    private String email;
    private String username;
    private String password;
    public SerializableUserInfo(String name, String phoneNumber, String Email, String userName, String Password) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = Email;
        this.username = userName;
        this.password = Password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phonenumber) {
        this.phoneNumber = phonenumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String Email) {
        this.email = Email;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String Password) {
        this.password = Password;
    }
}