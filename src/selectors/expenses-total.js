const selectExpenseTotal = (expenses) => {
    if(expenses.length === 0) {
        return 0;
    }
    return expenses
    .map(expense => expense.amount)
    .reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    })

}

export default selectExpenseTotal;