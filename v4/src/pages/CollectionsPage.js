import React, { Component } from 'react';
import Firebase from '../Firebase';
import Collections from '../components/Collections';

export default class CollectionsPage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-collections">

                <Collections />

            </div>
        );
    }
}
