import React, { useState, useEffect } from "react";
import PrisonerDialogForm from "./PrisonerDialogForm";
import { collectIdsAndData } from "../../utilities";
import { firestore } from "../../firebase";
import withUser from "./withUser";
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";
import { async } from "@firebase/util";
import Prisoners from "./Prisoners";

class PrisonerApp extends React.Component {
  state = {
    prisonerPost: []
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
      this.setState({ prisonerPost: post });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromPost();
  };

  render() {
    return (
      <div>
        {console.log(this.state.prisonerPost)}
        <PrisonerDialogForm postId={this.postId} />
        <Prisoners prisonerPost={this.state.prisonerPost} />
      </div>
    );
  }
}

export default withRouter(withUser(PrisonerApp));
