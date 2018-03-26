import React, { Component } from "react";
import Firebase from "../Firebase";
class AllPhotos extends Component {
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

  updateGallery(editedPhotoObj) {
    console.log("handleUpdate editedPhotoObj: ", editedPhotoObj);

    let newGallery = { ...this.state.gallery, ...editedPhotoObj };
    this.setState({ gallery: newGallery, modified: true });
  }

  save() {
    Firebase.save(this.state.gallery);
    this.setState({ modified: false });
  }

  load() {
    Firebase.load().then(snapshot => {
      this.setState({
        gallery: snapshot.val().gallery,
        collectionOptions: Object.keys(snapshot.val().collectionOptions),
        tagOptions: snapshot.val().tagOptions
      });
    });
  }

  update(photoObj) {
    const newObj = {};
    newObj[photoObj.id] = photoObj;
    this.updateGallery(newObj);
  }

  getThumbURL(url){
    const thumb = "-240x240.jpg";
    return url.indexOf(thumb) ? url : url.replace(".jpg", thumb);
  }

  renderRows (gallery, collectionOptions, tagOptions) {

    let panelList = [],
      photoObj,
      i = 0;

    for (let key in gallery) {
      photoObj = { ...gallery[key], key };
      photoObj["url"] = this.getThumbURL (photoObj.url);
      panelList.push(this.getRow(photoObj, key, ++i));
    }
    return panelList;
  }

  getRow(photo, key, i){
    console.log(photo.id);
    return (
      <tr key={key} >
        <td className="thumb"><img src={photo.url} alt=''/><span>{i}</span></td>
        <td>{photo.title}</td>
        <td>{photo.collections.join(", ")}</td>
        <td>{photo.tags && photo.tags.join('#')}</td>
        <td>{photo.id}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table cellSpacing="0">
        <thead>
            <tr>
                <th> </th>
                <th>Title</th>
                <th>Collections</th>
                <th>Tags</th>
                <th>ID</th>
            </tr>
      </thead>
      <tbody>

            {this.renderRows(this.state.gallery, this.state.collectionOptions, this.state.tagOptions)}

         </tbody>

        </table>
      </div>
    );
  }
}

export default AllPhotos;
