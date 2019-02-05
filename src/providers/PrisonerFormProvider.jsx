import React, { useState, createContext } from "react";

export const PrisonerNameContext = createContext();
export const PrisonerAgeContext = createContext();
export const PrisonerGenderContext = createContext();
export const PrisonerPermissionsContext = createContext();
export const SummaryContext = createContext();
export const Skill1Context = createContext();
export const Skill2Context = createContext();
export const Skill3Context = createContext();
export const Skill4Context = createContext();
export const OneEmployerContext = createContext();
export const OnePositionContext = createContext();
export const OneStartDateContext = createContext();
export const OneEndDateContext = createContext();
export const OneCityContext = createContext();
export const OneStateContext = createContext();
export const OneDuty1Context = createContext();
export const OneDuty2Context = createContext();
export const OneDuty3Context = createContext();
export const OneDuty4Context = createContext();
export const TwoEmployerContext = createContext();
export const TwoPositionContext = createContext();
export const TwoStartDateContext = createContext();
export const TwoEndDateContext = createContext();
export const TwoCityContext = createContext();
export const TwoStateContext = createContext();
export const TwoDuty1Context = createContext();
export const TwoDuty2Context = createContext();
export const TwoDuty3Context = createContext();
export const TwoDuty4Context = createContext();
export const ThreeEmployerContext = createContext();
export const ThreePositionContext = createContext();
export const ThreeStartDateContext = createContext();
export const ThreeEndDateContext = createContext();
export const ThreeCityContext = createContext();
export const ThreeStateContext = createContext();
export const ThreeDuty1Context = createContext();
export const ThreeDuty2Context = createContext();
export const ThreeDuty3Context = createContext();
export const ThreeDuty4Context = createContext();
export const FourEmployerContext = createContext();
export const FourPositionContext = createContext();
export const FourStartDateContext = createContext();
export const FourEndDateContext = createContext();
export const FourCityContext = createContext();
export const FourStateContext = createContext();
export const FourDuty1Context = createContext();
export const FourDuty2Context = createContext();
export const FourDuty3Context = createContext();
export const FourDuty4Context = createContext();

export const PrisonerFormProvider = props => {
  const [prisonerName, setPrisonerName] = useState("");
  const [prisonerAge, setPrisonerAge] = useState("");
  const [prisonerGender, setPrisonerGender] = useState("");
  const [prisonerPermissions, setPrisonerPermissions] = useState("");
  const [summary, setSummary] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [oneEmployer, setOneEmployer] = useState("");
  const [onePosition, setOnePosition] = useState("");
  const [oneStartDate, setOneStartDate] = useState("");
  const [oneEndDate, setOneEndDate] = useState("");
  const [oneCity, setOneCity] = useState("");
  const [oneState, setOneState] = useState("");
  const [oneDuty1, setOneDuty1] = useState("");
  const [oneDuty2, , setOneDuty2] = useState("");
  const [oneDuty3, setOneDuty3] = useState("");
  const [oneDuty4, setOneDuty4] = useState("");
  const [twoEmployer, setTwoEmployer] = useState("");
  const [twoPosition, setTwoPosition] = useState("");
  const [twoStartDate, setTwoStartDate] = useState("");
  const [twoEndDate, setTwoEndDate] = useState("");
  const [twoCity, setTwoCity] = useState("");
  const [twoState, setTwoState] = useState("");
  const [twoDuty1, setTwoDuty1] = useState("");
  const [twoDuty2, , setTwoDuty2] = useState("");
  const [twoDuty3, setTwoDuty3] = useState("");
  const [twoDuty4, setTwoDuty4] = useState("");
  const [threeEmployer, setThreeEmployer] = useState("");
  const [threePosition, setThreePosition] = useState("");
  const [threeStartDate, setThreeStartDate] = useState("");
  const [threeEndDate, setThreeEndDate] = useState("");
  const [threeCity, setThreeCity] = useState("");
  const [threeState, setThreeState] = useState("");
  const [threeDuty1, setThreeDuty1] = useState("");
  const [threeDuty2, , setThreeDuty2] = useState("");
  const [threeDuty3, setThreeDuty3] = useState("");
  const [threeDuty4, setThreeDuty4] = useState("");
  const [fourEmployer, setFourEmployer] = useState("");
  const [fourPosition, setFourPosition] = useState("");
  const [fourStartDate, setFourStartDate] = useState("");
  const [fourEndDate, setFourEndDate] = useState("");
  const [fourCity, setFourCity] = useState("");
  const [fourState, setFourState] = useState("");
  const [fourDuty1, setFourDuty1] = useState("");
  const [fourDuty2, , setFourDuty2] = useState("");
  const [fourDuty3, setFourDuty3] = useState("");
  const [fourDuty4, setFourDuty4] = useState("");

  const prisonerNameContext = {
    prisonerName,
    setPrisonerName
  };
  const prisonerAgeContext = {
    prisonerAge,
    setPrisonerAge
  };
  const prisonerGenderContext = {
    prisonerGender,
    setPrisonerGender
  };
  const prisonerPermissionsContext = {
    prisonerPermissions,
    setPrisonerPermissions
  };
  const summaryContext = {
    summary,
    setSummary
  };
  const skill1Context = {
    skill1,
    setSkill1
  };
  const skill2Context = {
    skill2,
    setSkill2
  };
  const skill3Context = {
    skill3,
    setSkill3
  };

  const skill4Context = {
    skill4,
    setSkill4
  };

  const oneEmployerContext = {
    oneEmployer,
    setOneEmployer
  };
  const onePositionContext = {
    onePosition,
    setOnePosition
  };
  const oneStartDateContext = {
    oneStartDate,
    setOneStartDate
  };
  const oneEndDateContext = {
    oneEndDate,
    setOneEndDate
  };

  const oneCityContext = {
    oneCity,
    setOneCity
  };
  const oneStateContext = {
    oneState,
    setOneState
  };
  const oneDuty1Context = {
    oneDuty1,
    setOneDuty1
  };
  const oneDuty2Context = {
    oneDuty2,
    setOneDuty2
  };
  const oneDuty3Context = {
    oneDuty3,
    setOneDuty3
  };
  const oneDuty4Context = {
    oneDuty4,
    setOneDuty4
  };

  const twoEmployerContext = {
    twoEmployer,
    setTwoEmployer
  };
  const twoPositionContext = {
    twoPosition,
    setTwoPosition
  };
  const twoStartDateContext = {
    twoStartDate,
    setTwoStartDate
  };
  const twoEndDateContext = {
    twoEndDate,
    setTwoEndDate
  };

  const twoCityContext = {
    twoCity,
    setTwoCity
  };
  const twoStateContext = {
    twoState,
    setTwoState
  };
  const twoDuty1Context = {
    twoDuty1,
    setTwoDuty1
  };
  const twoDuty2Context = {
    twoDuty2,
    setTwoDuty2
  };
  const twoDuty3Context = {
    twoDuty3,
    setTwoDuty3
  };
  const twoDuty4Context = {
    twoDuty4,
    setTwoDuty4
  };
  const threeEmployerContext = {
    threeEmployer,
    setThreeEmployer
  };
  const threePositionContext = {
    threePosition,
    setThreePosition
  };
  const threeStartDateContext = {
    threeStartDate,
    setThreeStartDate
  };
  const threeEndDateContext = {
    threeEndDate,
    setThreeEndDate
  };

  const threeCityContext = {
    threeCity,
    setThreeCity
  };
  const threeStateContext = {
    threeState,
    setThreeState
  };
  const threeDuty1Context = {
    threeDuty1,
    setThreeDuty1
  };
  const threeDuty2Context = {
    threeDuty2,
    setThreeDuty2
  };
  const threeDuty3Context = {
    threeDuty3,
    setThreeDuty3
  };
  const threeDuty4Context = {
    threeDuty4,
    setThreeDuty4
  };
  const fourEmployerContext = {
    fourEmployer,
    setFourEmployer
  };
  const fourPositionContext = {
    fourPosition,
    setFourPosition
  };
  const fourStartDateContext = {
    fourStartDate,
    setFourStartDate
  };
  const fourEndDateContext = {
    fourEndDate,
    setFourEndDate
  };

  const fourCityContext = {
    fourCity,
    setFourCity
  };
  const fourStateContext = {
    fourState,
    setFourState
  };
  const fourDuty1Context = {
    fourDuty1,
    setFourDuty1
  };
  const fourDuty2Context = {
    fourDuty2,
    setFourDuty2
  };
  const fourDuty3Context = {
    fourDuty3,
    setFourDuty3
  };
  const fourDuty4Context = {
    fourDuty4,
    setFourDuty4
  };

  const { children } = props;

  return (
    <FourDuty4Context.Provider value={fourDuty4Context}>
      <FourDuty3Context.Provider value={fourDuty3Context}>
        <FourDuty2Context.Provider value={fourDuty2Context}>
          <FourDuty1Context.Provider value={fourDuty1Context}>
            <FourStateContext.Provider value={fourStateContext}>
              <FourCityContext.Provider value={fourCityContext}>
                <FourEndDateContext.Provider value={fourEndDateContext}>
                  <FourStartDateContext.Provider value={fourStartDateContext}>
                    <FourPositionContext.Provider value={fourPositionContext}>
                      <FourEmployerContext.Provider value={fourEmployerContext}>
                        <ThreeDuty4Context.Provider value={threeDuty4Context}>
                          <ThreeDuty3Context.Provider value={threeDuty3Context}>
                            <ThreeDuty2Context.Provider
                              value={threeDuty2Context}
                            >
                              <ThreeDuty1Context.Provider
                                value={threeDuty1Context}
                              >
                                <ThreeStateContext.Provider
                                  value={threeStateContext}
                                >
                                  <ThreeCityContext.Provider
                                    value={threeCityContext}
                                  >
                                    <ThreeEndDateContext.Provider
                                      value={threeEndDateContext}
                                    >
                                      <ThreeStartDateContext.Provider
                                        value={threeStartDateContext}
                                      >
                                        <ThreePositionContext.Provider
                                          value={threePositionContext}
                                        >
                                          <ThreeEmployerContext.Provider
                                            value={threeEmployerContext}
                                          >
                                            <TwoDuty4Context.Provider
                                              value={twoDuty4Context}
                                            >
                                              <TwoDuty3Context.Provider
                                                value={twoDuty3Context}
                                              >
                                                <TwoDuty2Context.Provider
                                                  value={twoDuty2Context}
                                                >
                                                  <TwoDuty1Context.Provider
                                                    value={twoDuty1Context}
                                                  >
                                                    <TwoStateContext.Provider
                                                      value={twoStateContext}
                                                    >
                                                      <TwoCityContext.Provider
                                                        value={twoCityContext}
                                                      >
                                                        <TwoEndDateContext.Provider
                                                          value={
                                                            twoEndDateContext
                                                          }
                                                        >
                                                          <TwoStartDateContext.Provider
                                                            value={
                                                              twoStartDateContext
                                                            }
                                                          >
                                                            <TwoPositionContext.Provider
                                                              value={
                                                                twoPositionContext
                                                              }
                                                            >
                                                              <TwoEmployerContext.Provider
                                                                value={
                                                                  twoEmployerContext
                                                                }
                                                              >
                                                                <OneDuty4Context.Provider
                                                                  value={
                                                                    oneDuty4Context
                                                                  }
                                                                >
                                                                  <OneDuty3Context.Provider
                                                                    value={
                                                                      oneDuty3Context
                                                                    }
                                                                  >
                                                                    <OneDuty2Context.Provider
                                                                      value={
                                                                        oneDuty2Context
                                                                      }
                                                                    >
                                                                      <OneDuty1Context.Provider
                                                                        value={
                                                                          oneDuty1Context
                                                                        }
                                                                      >
                                                                        <OneStateContext.Provider
                                                                          value={
                                                                            oneStateContext
                                                                          }
                                                                        >
                                                                          <OneCityContext.Provider
                                                                            value={
                                                                              oneCityContext
                                                                            }
                                                                          >
                                                                            <OneEndDateContext.Provider
                                                                              value={
                                                                                oneEndDateContext
                                                                              }
                                                                            >
                                                                              <OneStartDateContext.Provider
                                                                                value={
                                                                                  oneStartDateContext
                                                                                }
                                                                              >
                                                                                <OnePositionContext.Provider
                                                                                  value={
                                                                                    onePositionContext
                                                                                  }
                                                                                >
                                                                                  <OneEmployerContext.Provider
                                                                                    value={
                                                                                      oneEmployerContext
                                                                                    }
                                                                                  >
                                                                                    <Skill4Context.Provider
                                                                                      value={
                                                                                        skill4Context
                                                                                      }
                                                                                    >
                                                                                      <Skill3Context.Provider
                                                                                        value={
                                                                                          skill3Context
                                                                                        }
                                                                                      >
                                                                                        <Skill2Context.Provider
                                                                                          value={
                                                                                            skill2Context
                                                                                          }
                                                                                        >
                                                                                          <Skill1Context.Provider
                                                                                            value={
                                                                                              skill1Context
                                                                                            }
                                                                                          >
                                                                                            <SummaryContext.Provider
                                                                                              value={
                                                                                                summaryContext
                                                                                              }
                                                                                            >
                                                                                              <PrisonerPermissionsContext.Provider
                                                                                                value={
                                                                                                  prisonerPermissionsContext
                                                                                                }
                                                                                              >
                                                                                                <PrisonerGenderContext.Provider
                                                                                                  value={
                                                                                                    prisonerGenderContext
                                                                                                  }
                                                                                                >
                                                                                                  <PrisonerAgeContext.Provider
                                                                                                    value={
                                                                                                      prisonerAgeContext
                                                                                                    }
                                                                                                  >
                                                                                                    <PrisonerNameContext.Provider
                                                                                                      value={
                                                                                                        prisonerNameContext
                                                                                                      }
                                                                                                    >
                                                                                                      {
                                                                                                        children
                                                                                                      }
                                                                                                    </PrisonerNameContext.Provider>
                                                                                                  </PrisonerAgeContext.Provider>
                                                                                                </PrisonerGenderContext.Provider>
                                                                                              </PrisonerPermissionsContext.Provider>
                                                                                            </SummaryContext.Provider>
                                                                                          </Skill1Context.Provider>
                                                                                        </Skill2Context.Provider>
                                                                                      </Skill3Context.Provider>
                                                                                    </Skill4Context.Provider>
                                                                                  </OneEmployerContext.Provider>
                                                                                </OnePositionContext.Provider>
                                                                              </OneStartDateContext.Provider>
                                                                            </OneEndDateContext.Provider>
                                                                          </OneCityContext.Provider>
                                                                        </OneStateContext.Provider>
                                                                      </OneDuty1Context.Provider>
                                                                    </OneDuty2Context.Provider>
                                                                  </OneDuty3Context.Provider>
                                                                </OneDuty4Context.Provider>
                                                              </TwoEmployerContext.Provider>
                                                            </TwoPositionContext.Provider>
                                                          </TwoStartDateContext.Provider>
                                                        </TwoEndDateContext.Provider>
                                                      </TwoCityContext.Provider>
                                                    </TwoStateContext.Provider>
                                                  </TwoDuty1Context.Provider>
                                                </TwoDuty2Context.Provider>
                                              </TwoDuty3Context.Provider>
                                            </TwoDuty4Context.Provider>
                                          </ThreeEmployerContext.Provider>
                                        </ThreePositionContext.Provider>
                                      </ThreeStartDateContext.Provider>
                                    </ThreeEndDateContext.Provider>
                                  </ThreeCityContext.Provider>
                                </ThreeStateContext.Provider>
                              </ThreeDuty1Context.Provider>
                            </ThreeDuty2Context.Provider>
                          </ThreeDuty3Context.Provider>
                        </ThreeDuty4Context.Provider>
                      </FourEmployerContext.Provider>
                    </FourPositionContext.Provider>
                  </FourStartDateContext.Provider>
                </FourEndDateContext.Provider>
              </FourCityContext.Provider>
            </FourStateContext.Provider>
          </FourDuty1Context.Provider>
        </FourDuty2Context.Provider>
      </FourDuty3Context.Provider>
    </FourDuty4Context.Provider>
  );
};
