import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { Character } from "./components/pruebas/character.model";
import { LoginServices } from "./log-in/login.service";

import { addDoc, collection, CollectionReference, DocumentData, Firestore, getDocs } from "firebase/firestore";



// @Injectable()
@Injectable({
    providedIn: 'root'
})




export class DataServices{
    
    constructor ( private httpClient:HttpClient, private loginSv:LoginServices){}
    


    inDate(){
        const token=this.loginSv.getIdToken();
        return this.httpClient.get('https://portfolio-ang-01-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    };
    // saveDate(chs:Character[]){
    //     this.httpClient.put('https://portfolio-ang-01-default-rtdb.firebaseio.com/datos.json',chs).subscribe(
    //         response=>console.log("Se han guardado los cambios" + response),
    //         error=>console.log("ERROR" + error),
    //     )
    // };
    // reloadDate(i:number, chs:Character){
    //     let url = `https://portfolio-ang-01-default-rtdb.firebaseio.com/datos/${i}.json`;
    //     this.httpClient.put(url,chs).subscribe(
    //         response=>console.log("Se modificado al personaje." + response),
    //         error=>console.log("ERROR" + error),
    //     )
    // };
    // Para eliminar un personaje de la BBDD  <<funciona mal : elimina todo desde el índice especificado>>  -->  usando saveDate cumple la función de eliminar.
    // delDate (i:number){
    //     let url = `https://portfolio-ang-01-default-rtdb.firebaseio.com/datos/${i}.json`;
    //     this.httpClient.delete(url).subscribe(
    //         response=>console.log("Se ha eliminado al personaje." + response),
    //         error=>console.log("ERROR" + error),
    //     );
    // };

    // inyección de datos por variables
    validator_edit:boolean = true;



    // --------------------------------------------------  CRUD  -------------------------------------------------------

    db:Firestore;
    aboutMeCol:CollectionReference<DocumentData, DocumentData>;
    

    setDb(db:Firestore){
        this.db = db;
        // console.log(db);
        this.aboutMeCol =  collection(this.db, "aboutMe");
    }

    // CREATE
    async addDoc(txt1:string,txt2:string){
        try {
            // const docRef = await addDoc(collection(this.db,"aboutMe"),{
            await addDoc(this.aboutMeCol,{
                text1:txt1,
                text2:txt2
            })

            console.log("Agregado")
        } catch (error){
            console.error("Error adding document: :", error);
            // console.log(this.db)
        }
    }

    // READ

    async getDocs(){
        console.log("getting about-me start", "db: ", this.db);
        
        const aboutMe = await getDocs(collection(this.db, 'aboutMe'))
        console.log(
            "about me: ",
            aboutMe
        );

        // try {
        //     const aboutMe = await getDocs(collection(this._firestore, PATH))
        //     console.log(
        //         "about me: ",
        //         aboutMe
        //     );
        //     console.log("getting about-me end");
        // } catch (e){
        //     console.error("Error getting document: ", e);
        // }
    }




    // UPDATE
    // DELETE
}