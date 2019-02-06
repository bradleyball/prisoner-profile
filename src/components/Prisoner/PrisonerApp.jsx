import React, { useState, useEffect } from "react";
import PrisonerDialogForm from "./PrisonerDialogForm";
import { collectIdsAndData } from "../../utilities";
import { firestore } from "../../firebase";
import withUser from "./withUser";
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";
import { async } from "@firebase/util";

class PrisonerApp extends React.Component {
  state = {
    prisonPost: []
  };
  get postId() {
    return this.props.match.params.id;
  }
  get postRef() {
    return firestore.doc(`posts/${this.postId}`);
  }
  get prisonerRef() {
    return this.postRef.collection("prisoner-post");
  }

  unsubscribeFromPost = null;
  componentDidMount = async () => {
    this.unsubscribeFromPost = this.prisonerRef.onSnapshot(snapshot => {
      const post = snapshot.docs.map(collectIdsAndData);
      this.setState({ prisonPost: post });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromPost();
  };

  render() {
    return (
      <div>
        {console.log(this.state.prisonPost)}
        <PrisonerDialogForm />
      </div>
    );
  }
}

export default withRouter(withUser(PrisonerApp));
