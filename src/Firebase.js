import * as firebase from "firebase";
class Firebase {
  init() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAWMYZ5pFmU0R01UTn5PWIB60W7oJacyno",
      authDomain: "subinpaul-v4.firebaseapp.com",
      databaseURL: "https://subinpaul-v4.firebaseio.com",
      projectId: "subinpaul-v4",
      storageBucket: "subinpaul-v4.appspot.com",
      messagingSenderId: "858045169773"
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
    if (window.location.href.indexOf("localhost") !== -1) {
      // return this.getRootRef().once("value");
    }

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
    firebase
      .database()
      .ref("portfolio/gallery/" + id)
      .set(newPhoto);
  }
}
export default new Firebase();
