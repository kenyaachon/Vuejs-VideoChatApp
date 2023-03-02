import { initializeApp } from "firebase/app"

import { firebaseConfig } from "@/secrets"

// base firebase setting
export const firebaseApp = initializeApp(firebaseConfig)
