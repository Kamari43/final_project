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
