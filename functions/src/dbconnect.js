import { initializeApp,credential,getApps } from "firebase-admin";
import { getFirestore} from "firebase-admin";
import { cert } from "firebase-admin/app";
import secrets from "../secrets.js"

export default function dbConnect() {
    if(!getApps().length) {
        initializeApp({
            credential: cert(secrets)
        })
    }
}