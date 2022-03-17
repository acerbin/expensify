import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
import * as firebase from "firebase/database";

//Expense Action generators
//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expense = {description, note, amount, createdAt};
        firebase.push(firebase.ref(database, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE

export const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})


//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
                firebase.get(firebase.ref(database, 'expenses'))
                .then((snapshot) => {
                    const expensesArray = []
                    snapshot.forEach((childSnapshot) => {
                        expensesArray.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        })
                    })
                    resolve(dispatch(setExpenses(expensesArray)))
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}