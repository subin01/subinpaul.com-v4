import * as firebase from "firebase";
class Firebase {
  init() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDHPX1yvA2t7nyVcVkOnLNf2cIp9BZe6zI",
      authDomain: "gallery-cbc9c.firebaseapp.com",
      databaseURL: "https://gallery-cbc9c.firebaseio.com",
      projectId: "gallery-cbc9c",
      storageBucket: "gallery-cbc9c.appspot.com",
      messagingSenderId: "397599745402"
    };
    firebase.initializeApp(config);
  }

  getRootRef() {
    return firebase.database().ref("portfolio/");
  }

  getGalleryRef() {
    return this.getRootRef().child("gallery");
  }

  load() {
    console.log(this.getRootRef().once("value"));
    if (window.location.href.indexOf("localhost") !== -1 )  {
     // return this.getRootRef().once("value");
    }
    console.log(fetch("./gallery-data.json"));

    //return (fetch("./gallery-data.json"))
  }

  save(newGallery) {
    newGallery = JSON.parse(JSON.stringify(newGallery));
    this.getGalleryRef().set(newGallery);
  }

  getTagOptions() {
    return this.getRootRef()
      .child("tagOptions")
      .once("value");
  }

  getColletionOptions() {
    return this.getRootRef()
      .child("ColletionsOptions")
      .once("value");
  }

  add(id, newPhoto) {
    console.log("******** Add photo", id, newPhoto);

    firebase
      .database()
      .ref("portfolio/gallery/" + id)
      .set(newPhoto);
  }
}
export default new Firebase();
