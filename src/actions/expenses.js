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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expense = {description, note, amount, createdAt};
        firebase.push(firebase.ref(database, `users/${uid}/expenses`), expense).then((ref) => {
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


export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        firebase.remove(firebase.ref(database, `users/${uid}/expenses/${id}`)).then(() => {
            dispatch(removeExpense({id}))
        }).catch(err => console.log(err)) 
    }
}


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return firebase.update(firebase.ref(database, `users/${uid}/expenses/${id}`), updates)
        .then(() => {
            dispatch(editExpense(id, updates))
        })
        .catch(err => console.log(err))
    }
}


//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpenses = (uid) => {
    return (dispatch, getState) => {
        uid = getState().auth.uid;
               return firebase.get(firebase.ref(database, `users/${uid}/expenses`))
                .then((snapshot) => {
                    const expensesArray = []
                    snapshot.forEach((childSnapshot) => {
                        expensesArray.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        })
                    })
                    dispatch(setExpenses(expensesArray))
                })

    }
}