import React, { useState, createContext } from "react";

export const PrisonNameContext = createContext();
export const StreetContext = createContext();
export const PStateContext = createContext();
export const CityContext = createContext();
export const ZipContext = createContext();
export const ContactNameContext = createContext();
export const PhoneNumberContext = createContext();
export const ContactEmailContext = createContext();

function PrisonFormProvider(props) {
  const [prisonName, setPrisonName] = useState("");
  const [street, setStreet] = useState("");
  const [pState, setPState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [contactEmail, setContactEmail] = useState("");

  const PrisonNameContext = {
    prisonName,
    setPrisonName
  };
  const StreetContext = {
    street,
    setStreet
  };
  const PStateContext = {
    pState,
    setPState
  };
  const CityContext = {
    city,
    setCity
  };
  const ZipContext = {
    zip,
    setZip
  };
  const ContactNameContext = {
    contactName,
    setContactName
  };
  const PhoneNumberContext = {
    phoneNumber,
    setPhoneNumber
  };
  const ContactEmailContext = {
    contactEmail,
    setContactEmail
  };

  const { children } = props;

  return (
    <PrisonNameContext.Provider value={PrisonNameContext}>
      <StreetContext.Provider value={StreetContext}>
        <PStateContext.Provider value={PStateContext}>
          <CityContext.Provider value={CityContext}>
            <ZipContext.Provider value={ZipContext}>
              <ContactNameContext.Provider value={ContactNameContext}>
                <PhoneNumberContext.Provider value={PhoneNumberContext}>
                  <ContactEmailContext.Provider value={ContactEmailContext}>
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
}

export default PrisonFormProvider;
