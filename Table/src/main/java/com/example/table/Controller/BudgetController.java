/*package com.example.table.controllers;

import com.example.table.models.parse.Budget;
import com.example.table.models.serializable.SerializableBudget;
import com.example.table.services.BudgetService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;

public class BudgetController {
    private BudgetService budgetService;

    public BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    //get all
    @GetMapping("/") //sets the path to this method
    public ArrayList<SerializableBudget> getProducts() {
        ArrayList<SerializableBudget> products = new ArrayList<>();

        //Convert the Parse Product object to a POJO Product object that can be serialized by Spring
        ArrayList<Budget> list = budgetService.retrieveBudget();
        for(Budget b : list)
        {
            budgets.add(b.getSerializable());
        }
        return products;
    }

    //get only one based on object id
    @GetMapping("/find/{id}")
    public SerializableBudget getProductById(@PathVariable String id){
        return productBudget.getProductById(id).getSerializable();
    }
}
*/
package com.example.table.Controller;
import com.example.table.Service.BudgetService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RequestMapping("/api/v1/budget")
public class BudgetController {

    public BudgetController(BudgetService budgetservice) {
    }
    @GetMapping("/")
    public void BudgetConfirmation(String Bud){
        Bud = BudgetService.addBudget();
        System.out.printf(Bud);
    }


}
