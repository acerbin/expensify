

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100 , createdAt: -100}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 300}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 600}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(-1250))
// store.dispatch(setEndDate())




