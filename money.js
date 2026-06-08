import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.saveExpense = async () => {
    const itemName = document.getElementById("itemName").value;
    const cost = parseFloat(document.getElementById("cost").value);
    const category = document.getElementById("category").value;

    try {
        await addDoc(collection(db, "expenses"), {
            item_name: itemName,
            cost: cost,
            category: category,
            date: new Date()
        });
        alert("Expense saved to Big Sarge Transportation logs!");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};