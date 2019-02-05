import React, { useState, createContext } from "react";

export const PrisonNameContext = createContext();
export const StreetContext = createContext();
export const PStateContext = createContext();
export const CityContext = createContext();
export const ZipContext = createContext();
export const ContactNameContext = createContext();
export const PhoneNumberContext = createContext();
export const ContactEmailContext = createContext();

export const PrisonFormProvider = props => {
  const [prisonName, setPrisonName] = useState("");
  const [street, setStreet] = useState("");
  const [pState, setPState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [contactEmail, setContactEmail] = useState("");

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
