import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

import { firebaseConfig } from "@/secrets"

// base firebase setting
export const firebaseApp = initializeApp(firebaseConfig)

// Initalize Firebase Authentication
export const auth = getAuth(firebaseApp)

// Initialize Cloud Firestore
export const db = getFirestore(firebaseApp)
