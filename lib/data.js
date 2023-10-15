import { getFirestore, getDoc, collection, doc } from 'firebase/firestore'

export function getData() {
    let firestore = getFirestore()
    getDoc(collection(firestore, "users"), doc(firestore, "users", getAuth().currentUser.uid)).then((doc) => {
        if(doc.exists()) {
            return doc.data()
        } else {
            return null
        }
    })
}