import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./locales";
import messages from "./messages";
const LocaleProvider = ({ children, locale = [LOCALES.ENGLISH] }) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};
export default LocaleProvider;
