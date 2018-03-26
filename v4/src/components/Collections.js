import React, { Component } from "react";
import Card from "./card";
import Firebase from "../Firebase";
class Collections extends Component {
  constructor() {
    super();
    console.log("Collections");
    this.state = {
      gallery: {},
      collectionOptions: {},
      tagOptions: {},
      modified: false
    };
  }

  componentDidMount() {
    this.load();
  }


  load() {

    if (window.location.href.indexOf("localhost") !== -1 )  {

      fetch("gallery-data.json")
        .then(blob => blob.json())
        .then(data => {
          this.setState({ ...data.portfolio });
         } );

    } else{

        Firebase.load().then(snapshot => {
          this.setState({
            gallery: snapshot.val().gallery
          });
        });

     }
  }


  getThumbURL(url){
    const thumb = "-240x240.jpg";
    return url.indexOf(thumb) ? url : url.replace(".jpg", thumb);
  }

  getPanelList(gallery, collectionOptions, tagOptions) {
    let panelList = [],
      photoObj;

    for (let key in gallery) {
      photoObj = { ...gallery[key], collectionOptions, key };
      photoObj["url"] = this.getThumbURL (photoObj.url);
      photoObj["tagOptions"] = tagOptions.map(item => {
        return { label: item, value: item };
      });

      panelList.push(<Card {...photoObj} />);
    }
    return panelList;
  }

  render() {
    return (
      <div>
        <h3 className="">Gallery Items</h3>
        <div>{this.getPanelList(this.state.gallery, this.state.collectionOptions, this.state.tagOptions)}</div>
      </div>
    );
  }
}

export default Collections;
