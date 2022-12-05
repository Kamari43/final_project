/*
package com.example.table;

import com.example.table.models.parse.Budget;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.json.JSONObject;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Entry {

    private Budget budget;
    private String description;
    private int amount;
    private String type;

    public JSONObject getJSONObject(){
        JSONObject obj = new JSONObject();
        obj.append("Budget", Budget.getSerializable());
        obj.append("description", description);
        obj.append("amount", amount);
        obj.append("type", type);
        return obj;
    }
}
 */
package com.example.table;

import com.example.table.Service.BudgetService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class Entry {

    //get only one based on object id
    @GetMapping({"/", "/find/{id}"})
    public String getUserById(@PathVariable String id){

        return BudgetService.secureBudgetById(id);
    }
}