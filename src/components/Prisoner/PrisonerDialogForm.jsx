/* eslint-disable default-case */
import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import "../../App.css";
import withUser from "./withUser";
import { auth, firestore } from "../../firebase";
import { withRouter } from "react-router-dom";
import {
  PrisonerEditContext,
  PrisonerNameContext,
  PrisonerAgeContext,
  PrisonerGenderContext,
  PrisonerPermissionsContext,
  SummaryContext,
  Skill1Context,
  Skill2Context,
  Skill3Context,
  Skill4Context,
  OneEmployerContext,
  OnePositionContext,
  OneStartDateContext,
  OneEndDateContext,
  OneCityContext,
  OneStateContext,
  OneDuty1Context,
  OneDuty2Context,
  OneDuty3Context,
  OneDuty4Context,
  TwoEmployerContext,
  TwoPositionContext,
  TwoStartDateContext,
  TwoEndDateContext,
  TwoCityContext,
  TwoStateContext,
  TwoDuty1Context,
  TwoDuty2Context,
  TwoDuty3Context,
  TwoDuty4Context,
  ThreeEmployerContext,
  ThreePositionContext,
  ThreeStartDateContext,
  ThreeEndDateContext,
  ThreeCityContext,
  ThreeStateContext,
  ThreeDuty1Context,
  ThreeDuty2Context,
  ThreeDuty3Context,
  ThreeDuty4Context,
  FourEmployerContext,
  FourPositionContext,
  FourStartDateContext,
  FourEndDateContext,
  FourCityContext,
  FourStateContext,
  FourDuty1Context,
  FourDuty2Context,
  FourDuty3Context,
  FourDuty4Context,
  PrisonerProfileIdContext
} from "../../providers/PrisonerFormProvider";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { UserContext } from "../../providers/UserProvider";
// **********************************************************************  styles for material ui *************************************
const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  fixed: {
    position: "fixed"
  }
});
// ****************************************************************************************************************************************
function PrisonerDialogForm(props) {
  // ******************************************  State Hooks created in componet *********************************

  const [handleSelect, setHandleSelect] = useState(false);

  // *********************************************************************************************************************************************
  // ******************************************************* Misc Context ****************************************

  const currentUser = useContext(UserContext);
  //   ******************************************************************************************************************************************************

  // ********************************************** All of the state for the form ***********************
  const { prisonerProfileId, setPrisonerProfileId } = useContext(
    PrisonerProfileIdContext
  );
  const { prisonerEdit, setPrisonerEdit } = useContext(PrisonerEditContext);
  const { prisonerName, setPrisonerName } = useContext(PrisonerNameContext);
  const { prisonerAge, setPrisonerAge } = useContext(PrisonerAgeContext);
  const { prisonerGender, setPrisonerGender } = useContext(
    PrisonerGenderContext
  );
  const { prisonerPermissions, setPrisonerPermissions } = useContext(
    PrisonerPermissionsContext
  );
  const { summary, setSummary } = useContext(SummaryContext);
  const { skill1, setSkill1 } = useContext(Skill1Context);
  const { skill2, setSkill2 } = useContext(Skill2Context);
  const { skill3, setSkill3 } = useContext(Skill3Context);
  const { skill4, setSkill4 } = useContext(Skill4Context);
  const { oneEmployer, setOneEmployer } = useContext(OneEmployerContext);
  const { onePosition, setOnePosition } = useContext(OnePositionContext);
  const { oneStartDate, setOneStartDate } = useContext(OneStartDateContext);
  const { oneEndDate, setOneEndDate } = useContext(OneEndDateContext);
  const { oneCity, setOneCity } = useContext(OneCityContext);
  const { oneState, setOneState } = useContext(OneStateContext);
  const { oneDuty1, setOneDuty1 } = useContext(OneDuty1Context);
  const { oneDuty2, setOneDuty2 } = useContext(OneDuty2Context);
  const { oneDuty3, setOneDuty3 } = useContext(OneDuty3Context);
  const { oneDuty4, setOneDuty4 } = useContext(OneDuty4Context);
  const { twoEmployer, setTwoEmployer } = useContext(TwoEmployerContext);
  const { twoPosition, setTwoPosition } = useContext(TwoPositionContext);
  const { twoStartDate, setTwoStartDate } = useContext(TwoStartDateContext);
  const { twoEndDate, setTwoEndDate } = useContext(TwoEndDateContext);
  const { twoCity, setTwoCity } = useContext(TwoCityContext);
  const { twoState, setTwoState } = useContext(TwoStateContext);
  const { twoDuty1, setTwoDuty1 } = useContext(TwoDuty1Context);
  const { twoDuty2, setTwoDuty2 } = useContext(TwoDuty2Context);
  const { twoDuty3, setTwoDuty3 } = useContext(TwoDuty3Context);
  const { twoDuty4, setTwoDuty4 } = useContext(TwoDuty4Context);
  const { threeEmployer, setThreeEmployer } = useContext(ThreeEmployerContext);
  const { threePosition, setThreePosition } = useContext(ThreePositionContext);
  const { threeStartDate, setThreeStartDate } = useContext(
    ThreeStartDateContext
  );
  const { threeEndDate, setThreeEndDate } = useContext(ThreeEndDateContext);
  const { threeCity, setThreeCity } = useContext(ThreeCityContext);
  const { threeState, setThreeState } = useContext(ThreeStateContext);
  const { threeDuty1, setThreeDuty1 } = useContext(ThreeDuty1Context);
  const { threeDuty2, setThreeDuty2 } = useContext(ThreeDuty2Context);
  const { threeDuty3, setThreeDuty3 } = useContext(ThreeDuty3Context);
  const { threeDuty4, setThreeDuty4 } = useContext(ThreeDuty4Context);
  const { fourEmployer, setFourEmployer } = useContext(FourEmployerContext);
  const { fourPosition, setFourPosition } = useContext(FourPositionContext);
  const { fourStartDate, setFourStartDate } = useContext(FourStartDateContext);
  const { fourEndDate, setFourEndDate } = useContext(FourEndDateContext);
  const { fourCity, setFourCity } = useContext(FourCityContext);
  const { fourState, setFourState } = useContext(FourStateContext);
  const { fourDuty1, setFourDuty1 } = useContext(FourDuty1Context);
  const { fourDuty2, setFourDuty2 } = useContext(FourDuty2Context);
  const { fourDuty3, setFourDuty3 } = useContext(FourDuty3Context);
  const { fourDuty4, setFourDuty4 } = useContext(FourDuty4Context);

  //   *********************************************************************************************************************************

  // ***************************************** Handling Changes and Submit to form imputs ******************************

  const handlePrisonerChanges = e => {
    switch (e.target.name) {
      case "prisonerName":
        setPrisonerName(e.target.value);
        break;
      case "prisonerAge":
        setPrisonerAge(e.target.value);
        break;
      case "prisonerGender":
        setPrisonerGender(e.target.value);
        break;
      case "prisonerPermissions":
        setPrisonerPermissions(e.target.value);
        break;
      case "summary":
        setSummary(e.target.value);
        break;
      case "skill1":
        setSkill1(e.target.value);
        break;
      case "skill2":
        setSkill2(e.target.value);
        break;
      case "skill3":
        setSkill3(e.target.value);
        break;
      case "skill4":
        setSkill4(e.target.value);
        break;
      case "oneEmployer":
        setOneEmployer(e.target.value);
        break;
      case "onePosition":
        setOnePosition(e.target.value);
        break;
      case "oneStartDate":
        setOneStartDate(e.target.value);
        break;
      case "oneEndDate":
        setOneEndDate(e.target.value);
        break;
      case "oneCity":
        setOneCity(e.target.value);
        break;
      case "oneState":
        setOneState(e.target.value);
        break;
      case "oneDuty1":
        setOneDuty1(e.target.value);
        break;
      case "oneDuty2":
        setOneDuty2(e.target.value);
        break;
      case "oneDuty3":
        setOneDuty3(e.target.value);
        break;
      case "oneDuty4":
        setOneDuty4(e.target.value);
        break;
      case "twoEmployer":
        setTwoEmployer(e.target.value);
        break;
      case "twoPosition":
        setTwoPosition(e.target.value);
        break;
      case "twoStartDate":
        setTwoStartDate(e.target.value);
        break;
      case "twoEndDate":
        setTwoEndDate(e.target.value);
        break;
      case "twoCity":
        setTwoCity(e.target.value);
        break;
      case "twoState":
        setTwoState(e.target.value);
        break;
      case "twoDuty1":
        setTwoDuty1(e.target.value);
        break;
      case "twoDuty2":
        setTwoDuty2(e.target.value);
        break;
      case "twoDuty3":
        setTwoDuty3(e.target.value);
        break;
      case "twoDuty4":
        setTwoDuty4(e.target.value);
        break;
      case "threeEmployer":
        setThreeEmployer(e.target.value);
        break;
      case "threePosition":
        setThreePosition(e.target.value);
        break;
      case "threeStartDate":
        setThreeStartDate(e.target.value);
        break;
      case "threeEndDate":
        setThreeEndDate(e.target.value);
        break;
      case "threeCity":
        setThreeCity(e.target.value);
        break;
      case "threeState":
        setThreeState(e.target.value);
        break;
      case "threeDuty1":
        setThreeDuty1(e.target.value);
        break;
      case "threeDuty2":
        setThreeDuty2(e.target.value);
        break;
      case "threeDuty3":
        setThreeDuty3(e.target.value);
        break;
      case "threeDuty4":
        setThreeDuty4(e.target.value);
        break;

      case "fourEmployer":
        setFourEmployer(e.target.value);
        break;
      case "fourPosition":
        setFourPosition(e.target.value);
        break;
      case "fourStartDate":
        setFourStartDate(e.target.value);
        break;
      case "fourEndDate":
        setFourEndDate(e.target.value);
        break;
      case "fourCity":
        setFourCity(e.target.value);
        break;
      case "fourState":
        setFourState(e.target.value);
        break;
      case "fourDuty1":
        setFourDuty1(e.target.value);
        break;
      case "fourDuty2":
        setFourDuty2(e.target.value);
        break;
      case "fourDuty3":
        setFourDuty3(e.target.value);
        break;
      case "fourDuty4":
        setFourDuty4(e.target.value);
        break;
    }
  };

  const prisonerSubmit = event => {
    event.preventDefault();
    const postId = props.postId;

    const postRef = firestore.doc(`posts/${postId}`);

    const prisonerRef = postRef.collection("prisoner-post");

    const { uid, displayName, email, photoURL } = auth.currentUser || {};
    const post = {
      generalInfo: {
        prisonerName,
        prisonerAge,
        prisonerGender,
        prisonerPermissions
      },
      skills: {
        summary,
        skill1,
        skill2,
        skill3,
        skill4
      },
      workExperience1: {
        oneEmployer,
        onePosition,
        oneStartDate,
        oneEndDate,
        oneCity,
        oneState,
        oneDuty1,
        oneDuty2,
        oneDuty3,
        oneDuty4
      },

      workExperience2: {
        twoEmployer,
        twoPosition,
        twoStartDate,
        twoEndDate,
        twoCity,
        twoState,
        twoDuty1,
        twoDuty2,
        twoDuty3,
        twoDuty4
      },

      workExperience3: {
        threeEmployer,
        threePosition,
        threeStartDate,
        threeEndDate,
        threeCity,
        threeState,
        threeDuty1,
        threeDuty2,
        threeDuty3,
        threeDuty4
      },

      workExperience4: {
        fourEmployer,
        fourPosition,
        fourStartDate,
        fourEndDate,
        fourCity,
        fourState,
        fourDuty1,
        fourDuty2,
        fourDuty3,
        fourDuty4
      },

      user: {
        uid,
        displayName,
        email,
        photoURL
      },

      createdAt: new Date()
    };
    prisonerEdit
      ? prisonerRef.doc(prisonerProfileId).update(post)
      : prisonerRef.add(post);

    setPrisonerEdit(false);

    props.dialogClick();

    setPrisonerName("");

    setPrisonerAge("");

    setPrisonerGender("");

    setPrisonerPermissions("");

    setSummary("");

    setSkill1("");

    setSkill2("");

    setSkill3("");

    setSkill4("");

    setOneEmployer("");

    setOnePosition("");

    setOneStartDate("");

    setOneEndDate("");

    setOneCity("");

    setOneState("");

    setOneDuty1("");

    setOneDuty2("");

    setOneDuty3("");

    setOneDuty4("");

    setTwoEmployer("");

    setTwoPosition("");

    setTwoStartDate("");

    setTwoEndDate("");

    setTwoCity("");

    setTwoState("");

    setTwoDuty1("");

    setTwoDuty2("");

    setTwoDuty3("");

    setTwoDuty4("");

    setThreeEmployer("");

    setThreePosition("");

    setThreeStartDate("");

    setThreeEndDate("");

    setThreeCity("");

    setThreeState("");

    setThreeDuty1("");

    setThreeDuty2("");

    setThreeDuty3("");

    setThreeDuty4("");

    setFourEmployer("");

    setFourPosition("");

    setFourStartDate("");

    setFourEndDate("");

    setFourCity("");

    setFourState("");

    setFourDuty1("");

    setFourDuty2("");

    setFourDuty3("");

    setFourDuty4("");
  };
  // *******************************************************************************************************************************************************
  //**************************************   Opening and Closing functions */

  const clickSelect = () => {
    setHandleSelect(!handleSelect);
  };

  // **********************************************************************************************************************************************************
  // classes to use styles in material ui
  const { classes } = props;

  return (
    <div>
      <div className="prison-form-wrapper">
        <div className="prison-fab-wrapper">
          <Fab
            id="prison-fab-button"
            color="primary"
            aria-label="Add"
            className={`${classes.fab} prison-fab-button`}
            onClick={props.dialogClick}
          >
            <AddIcon />
          </Fab>
          <h2 className="prison-fab-h2">Create a New Worker</h2>
        </div>
      </div>
      <Dialog
        open={props.dialog}
        onClose={props.dialogClick}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={prisonerSubmit}>
          {/************************************************** General Info Section *************************************************  */}
          <DialogTitle id="form-dialog-title">
            General Prisoner Info
          </DialogTitle>
          <DialogContent>
            <TextField
              className={classes.formControl}
              variant="filled"
              label="Name Of Worker"
              name="prisonerName"
              value={prisonerName}
              onChange={handlePrisonerChanges}
            />
            <TextField
              className={classes.formControl}
              variant="filled"
              label="Age"
              name="prisonerAge"
              onChange={handlePrisonerChanges}
              value={prisonerAge}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              select
              label="Gender"
              name="prisonerGender"
              value={prisonerGender}
              open={handleSelect}
              onClose={clickSelect}
              onChange={handlePrisonerChanges}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="N/A">Other</MenuItem>
            </TextField>
            <TextField
              variant="filled"
              className={classes.formControl}
              select
              value={prisonerPermissions}
              name="prisonerPermissions"
              label="Permissions"
              open={handleSelect}
              onClose={clickSelect}
              onChange={handlePrisonerChanges}
            >
              <MenuItem value="✗ Does not have permission to work outside of prison.">
                ✗ Does not have permission for work leave
              </MenuItem>
              <MenuItem value="✓ Has permission for work leave">
                ✓ Has permission for work leave.
              </MenuItem>
            </TextField>
            {/* ******************************************************************* Skills Section ********************************** */}

            <DialogTitle id="form-dialog-title">Skills</DialogTitle>

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              multiline
              rows="6"
              value={summary}
              label="Summary(Cover Letter)"
              name="summary"
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Skills"
              name="skill1"
              value={skill1}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Skills"
              name="skill2"
              value={skill2}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Skills"
              name="skill3"
              value={skill3}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Skills"
              name="skill4"
              value={skill4}
              onChange={handlePrisonerChanges}
            />

            {/************************************************************************** First Previous Experience Section *********/}
            <DialogTitle id="form-dialog-title">
              Previous Work Experience
            </DialogTitle>

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Company/Employer"
              name="oneEmployer"
              value={oneEmployer}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Title"
              name="onePosition"
              value={onePosition}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="Start Date"
              name="oneStartDate"
              value={oneStartDate}
              onChange={handlePrisonerChanges}
              type="date"
              defaultValue="yyyy-mm-dd"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="End Date"
              type="date"
              defaultValue="yyyy-mm-dd"
              onChange={handlePrisonerChanges}
              name="oneEndDate"
              value={oneEndDate}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="City of Employment"
              name="oneCity"
              value={oneCity}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="State of Employment"
              name="oneState"
              value={oneState}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="oneDuty1"
              value={oneDuty1}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="oneDuty2"
              value={oneDuty2}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="oneDuty3"
              value={oneDuty3}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="oneDuty4"
              value={oneDuty4}
              onChange={handlePrisonerChanges}
            />

            {/***************************************************************** Second Previous Experience                   *********/}
            <DialogTitle id="form-dialog-title">
              Previous Work Experience
            </DialogTitle>

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Company/Employer"
              name="twoEmployer"
              value={twoEmployer}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Title"
              name="twoPosition"
              value={twoPosition}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="Start Date"
              name="twoStartDate"
              value={twoStartDate}
              onChange={handlePrisonerChanges}
              type="date"
              defaultValue="yyyy-mm-dd"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="End Date"
              type="date"
              defaultValue="yyyy-mm-dd"
              name="twoEndDate"
              value={twoEndDate}
              onChange={handlePrisonerChanges}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="City of Employment"
              name="twoCity"
              value={twoCity}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="State of Employment"
              name="twoState"
              value={twoState}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="twoDuty1"
              value={twoDuty1}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="twoDuty2"
              value={twoDuty2}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="twoDuty3"
              value={twoDuty3}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="twoDuty4"
              value={twoDuty4}
              onChange={handlePrisonerChanges}
            />

            {/******************************************************************** Third Previous Experience                   *********/}
            <DialogTitle id="form-dialog-title">
              Previous Work Experience
            </DialogTitle>

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Company/Employer"
              name="threeEmployer"
              value={threeEmployer}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Title"
              name="threePosition"
              value={threePosition}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="Start Date"
              name="threeStartDate"
              value={threeStartDate}
              onChange={handlePrisonerChanges}
              type="date"
              defaultValue="yyyy-mm-dd"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="End Date"
              type="date"
              defaultValue="yyyy-mm-dd"
              name="threeEndDate"
              value={threeEndDate}
              onChange={handlePrisonerChanges}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="City of Employment"
              name="threeCity"
              value={threeCity}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="State of Employment"
              name="threeState"
              value={threeState}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="threeDuty1"
              value={threeDuty1}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="threeDuty2"
              value={threeDuty2}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="threeDuty3"
              value={threeDuty3}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="threeDuty4"
              value={threeDuty4}
              onChange={handlePrisonerChanges}
            />

            {/******************************************************************** Fourth Previous Experience                   *********/}
            <DialogTitle id="form-dialog-title">
              Previous Work Experience
            </DialogTitle>

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Company/Employer"
              name="fourEmployer"
              value={fourEmployer}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Title"
              name="fourPosition"
              value={fourPosition}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="Start Date"
              name="fourStartDate"
              value={fourStartDate}
              onChange={handlePrisonerChanges}
              type="date"
              defaultValue="yyyy-mm-dd"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="End Date"
              type="date"
              defaultValue="yyyy-mm-dd"
              name="fourEndDate"
              value={fourEndDate}
              onChange={handlePrisonerChanges}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="filled"
              className={classes.formControl}
              label="City of Employment"
              name="fourCity"
              value={fourCity}
              onChange={handlePrisonerChanges}
            />

            <TextField
              variant="filled"
              className={classes.formControl}
              label="State of Employment"
              name="fourState"
              value={fourState}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="fourDuty1"
              value={fourDuty1}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="fourDuty2"
              value={fourDuty2}
              onChange={handlePrisonerChanges}
            />

            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="fourDuty3"
              value={fourDuty3}
              onChange={handlePrisonerChanges}
            />
            <TextField
              fullWidth
              variant="filled"
              className={classes.formControl}
              label="Job Responsibilities (Short Sentence)"
              name="fourDuty4"
              value={fourDuty4}
              onChange={handlePrisonerChanges}
            />

            {/* ********************************************************************************************************* */}
          </DialogContent>
          <DialogActions>
            <Button onClick={props.dialogClick} color="primary">
              Cancel
            </Button>
            {prisonerEdit ? (
              <Button onSubmit={prisonerSubmit} type="submit" color="primary">
                update
              </Button>
            ) : (
              <Button onSubmit={prisonerSubmit} type="submit" color="primary">
                Submit
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(PrisonerDialogForm);
