import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore ,collection, query,getDocs,setDoc,doc,where, Firestore, getDoc, updateDoc } from "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyDyBADMoubFnh_z1LfDE7HLPRiF6ktRjls",
    authDomain: "invitacion-ed8d3.firebaseapp.com",
    projectId: "invitacion-ed8d3",
    storageBucket: "invitacion-ed8d3.appspot.com",
    messagingSenderId: "531646178848",
    appId: "1:531646178848:web:9a4e1cb26caead29767e45",
    measurementId: "G-LF6CXHRHTY"
  };
  constructor() {
    this.iniciar();
  }

  async iniciar() {
    //   console.log('entor aqui')
    //   // Initialize Firebase
    //   const app = initializeApp(this.firebaseConfig);
    //   const analytics = getAnalytics(app);
    //   const db = getFirestore(app);
    //   const citiesRef = collection(db, "Invitaciones");
    //   const q = query(citiesRef );
    //   const querySnapshot = await getDocs(q);
    //   let value:any;
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     if(doc.id == 'DD8FfPh5rJ1gw6z2gTBp'){
    //       value = doc.data()
    //     }
    //   });
    //  return value;

  }
  async setdata(obj: any) {
     console.log(obj)
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);
    const citiesRef = collection(db, "Invitaciones");
    await setDoc(doc(citiesRef), obj);

  }
  async findOne(id: any) {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, 'Invitaciones', id);
    let value;
    try {
      const docSnap = await getDoc(docRef);
      value = {
        data: docSnap.data(),
        status: 0,
      }
    } catch (error) {
      value = {
        data: error,
        status: 1,
      }
    }
    return value;

  }

  async update(data: any, id: any) {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, 'Invitaciones', id);
    updateDoc(docRef, data)
      .then(docRef => {
        console.log("A New Document Field has been added to an existing document");
      })
      .catch(error => {
        console.log(error);
      })
  }
}
