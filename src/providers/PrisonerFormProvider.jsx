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

export const PrisonFormProvider = props => {
  const [prisonerName, setPrisonerName] = useState("");
  const [prisonerAge, setPrisonerAge] = useState("");
  const [prisonerGender, setPrisonerGender] = useState("");
  const [prisonerPermissions, setPrisonerPermissions] = useState("");
  const [summary, setSummary] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState(null);
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [oneEmployer, setOneEmployer] = useState("");
  const [onePosition, setOnePosition] = useState("");
  const [oneStartDate, setOneStartDate] = useState("");
  const [oneEndDate, setOneEndDate] = useState("");
  const [oneCity, setOneCity] = useState("");
  const [oneState, setOneState] = useState(null);
  const [oneDuty1, setOneDuty1] = useState("");
  const [oneDuty2, , setOneDuty2] = useState("");
  const [oneDuty3, setOneDuty3] = useState("");
  const [oneDuty4, setOneDuty4] = useState("");
  const [twoEmployer, setTwoEmployer] = useState("");
  const [twoPosition, setTwoPosition] = useState("");
  const [twoStartDate, setTwoStartDate] = useState("");
  const [twoEndDate, setTwoEndDate] = useState("");
  const [twoCity, setTwoCity] = useState("");
  const [twoState, setTwoState] = useState(null);
  const [twoDuty1, setTwoDuty1] = useState("");
  const [twoDuty2, , setTwoDuty2] = useState("");
  const [twoDuty3, setTwoDuty3] = useState("");
  const [twoDuty4, setTwoDuty4] = useState("");
  const [threeEmployer, setThreeEmployer] = useState("");
  const [threePosition, setThreePosition] = useState("");
  const [threeStartDate, setThreeStartDate] = useState("");
  const [threeEndDate, setThreeEndDate] = useState("");
  const [threeCity, setThreeCity] = useState("");
  const [threeState, setThreeState] = useState(null);
  const [threeDuty1, setThreeDuty1] = useState("");
  const [threeDuty2, , setThreeDuty2] = useState("");
  const [threeDuty3, setThreeDuty3] = useState("");
  const [threeDuty4, setThreeDuty4] = useState("");
  const [fourEmployer, setFourEmployer] = useState("");
  const [fourPosition, setFourPosition] = useState("");
  const [fourStartDate, setFourStartDate] = useState("");
  const [fourEndDate, setFourEndDate] = useState("");
  const [fourCity, setFourCity] = useState("");
  const [fourState, setFourState] = useState(null);
  const [fourDuty1, setFourDuty1] = useState("");
  const [fourDuty2, , setFourDuty2] = useState("");
  const [fourDuty3, setFourDuty3] = useState("");
  const [fourDuty4, setFourDuty4] = useState("");

  const prisonNameContext = {
    prisonName,
    setPrisonName
  };
  const streetContext = {
    street,
    setStreet
  };
  const pStateContext = {
    pState,
    setPState
  };
  const cityContext = {
    city,
    setCity
  };
  const zipContext = {
    zip,
    setZip
  };
  const contactNameContext = {
    contactName,
    setContactName
  };
  const phoneNumberContext = {
    phoneNumber,
    setPhoneNumber
  };
  const contactEmailContext = {
    contactEmail,
    setContactEmail
  };

  const { children } = props;

  return (
    <PrisonNameContext.Provider value={prisonNameContext}>
      <StreetContext.Provider value={streetContext}>
        <PStateContext.Provider value={pStateContext}>
          <CityContext.Provider value={cityContext}>
            <ZipContext.Provider value={zipContext}>
              <ContactNameContext.Provider value={contactNameContext}>
                <PhoneNumberContext.Provider value={phoneNumberContext}>
                  <ContactEmailContext.Provider value={contactEmailContext}>
                    {children}
                  </ContactEmailContext.Provider>
                </PhoneNumberContext.Provider>
              </ContactNameContext.Provider>
            </ZipContext.Provider>
          </CityContext.Provider>
        </PStateContext.Provider>
      </StreetContext.Provider>
    </PrisonNameContext.Provider>
  );
};
