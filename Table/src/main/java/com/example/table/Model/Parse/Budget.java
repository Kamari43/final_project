/*
package com.example.table.models.parse;

import static javax.swing.UIManager.getString;
import static javax.swing.UIManager.put;

public class Budget {
    private String descrip;
    private String type;
    private String amount;

    //Accessor and Manipulator Description
    public void setDescription(String description) {
        put(descrip,description);
    }
    public String getDescription(){
        return getString(descrip);
    }

    //Accessor and Manipulator Type
    public void setType(String ty) {
        put(type,ty);
    }
    public String getType(){
        return getString(type);
    }

    public void setAmount(String amou) {put(amou,ty); }

    public String getType(){
        return getString(type);
    }

    //Accessor and Manipulator Amount
    public void setAmount(String amount1) {
        put(amount,amount1);
    }
    public String getAmount(){
        return getString(Amount);
    }

}
*/
package com.example.table.Model.Parse;

import com.example.table.Model.Serialiazable.SerializableBudget;

import static javax.swing.UIManager.getString;
import static javax.swing.UIManager.put;

public class Budget {

    private static String descrip = "Utilities";
    private static String type = "Expense";
    private static int amount = 200;

    private static String objectID = "U1Vr30sAEz";


    //Accessor and Manipulator Description
    public void setDescription(String description) {
        put(descrip,description);
    }
    public static String getDescription(){
        return getString(descrip);
    }

    //Accessor and Manipulator Type
    public void setType(String ty) {
        put(type,ty);
    }
    public static String getType(){
        return getString(type);
    }

    //Accessor and Manipulator Amount
    public void setAmount(int amount1) {
        put(amount,amount1);
    }
    public static int getAmount(){
        return amount;
    }

    public void setObjectID(String objectid){
        put(objectID,objectid);
    }

    public static String getObjectID(){
        return getString(objectID);
    }

    public void save() {

    }

    public SerializableBudget getSerializable(){
        return new SerializableBudget(
                getDescription(), getType(), getAmount() );
    }

}