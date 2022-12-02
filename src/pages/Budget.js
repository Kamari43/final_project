function Budget() {

        return (
            <>
                <section id="Tipnit">
                    <div className="container">
                        <h1 className="display 3 text-center">Tipnit</h1><br/><br/>
                        <img src="" alt="" width="" height=""/><br/>
                        <h3 className="display 5">A little about Tipnit</h3><br/>
                        <p>A successful budget planner helps you decide how to best spend your money while avoiding or
                            reducing debt.
                            Tipnit recommends the 50/30/20 budget, which suggests that 50% of your income goes toward
                            needs,
                            30% toward wants and 20% toward savings and debt repayment. Your remaining amount will be
                            your savings.
                        </p>
                    </div>
                </section>
                <br/>
                <div id="app">
                    <table className="budget-tracker">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className="entries">
                        <tr>
                            <td>
                                <input className="input input-date" type="date"/>
                            </td>
                            <td>
                                <input className="input input-description" type="text"
                                       placeholder="Add a Description."/>
                            </td>
                            <td>
                                <select className="input input-type">
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                            </td>
                            <td>
                                <input type="number" className="input input-amount"/>
                            </td>
                            <td>
                                <button type="button" className="delete-entry"></button>
                            </td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td colSpan="5"></td>
                            <button type="button" className="new-entry">New Entry</button>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan="5" className="summary">
                                <strong>Total:</strong>
                                <span className="total">$0.00</span>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </>
        );
}
export default Budget;
