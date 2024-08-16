import {useEffect} from 'react'
import {i18n} from '@lingui/core'

import {sanitizeAppLanguageSetting} from '#/locale/helpers'
import {AppLanguage} from '#/locale/languages'
import {useLanguagePrefs} from '#/state/preferences'
import {messages as caMessages} from './locales/ca/messages'
import {messages as deMessages} from './locales/de/messages'
import {messages as enMessages} from './locales/en/messages'
import {messages as esMessages} from './locales/es/messages'
import {messages as fiMessages} from './locales/fi/messages'
import {messages as frMessages} from './locales/fr/messages'
import {messages as gaMessages} from './locales/ga/messages'
import {messages as hiMessages} from './locales/hi/messages'
import {messages as idMessages} from './locales/id/messages'
import {messages as itMessages} from './locales/it/messages'
import {messages as jaMessages} from './locales/ja/messages'
import {messages as koMessages} from './locales/ko/messages'
import {messages as ptBRMessages} from './locales/pt-BR/messages'
import {messages as trMessages} from './locales/tr/messages'
import {messages as ukMessages} from './locales/uk/messages'
import {messages as zhCNMessages} from './locales/zh-CN/messages'
import {messages as zhTWMessages} from './locales/zh-TW/messages'

/**
 * Non-dynamic import of locale messages
 */
const localeMessages = {
  [AppLanguage.ca]: caMessages,
  [AppLanguage.de]: deMessages,
  [AppLanguage.es]: esMessages,
  [AppLanguage.fi]: fiMessages,
  [AppLanguage.fr]: frMessages,
  [AppLanguage.ga]: gaMessages,
  [AppLanguage.hi]: hiMessages,
  [AppLanguage.id]: idMessages,
  [AppLanguage.it]: itMessages,
  [AppLanguage.ja]: jaMessages,
  [AppLanguage.ko]: koMessages,
  [AppLanguage.pt_BR]: ptBRMessages,
  [AppLanguage.tr]: trMessages,
  [AppLanguage.uk]: ukMessages,
  [AppLanguage.zh_CN]: zhCNMessages,
  [AppLanguage.zh_TW]: zhTWMessages,
  [AppLanguage.en]: enMessages,
}

export function activateLocale(locale: AppLanguage) {
  const messages = localeMessages[locale] || enMessages
  i18n.load(locale, messages)
  i18n.activate(locale)
}

export function useLocaleLanguage() {
  const {appLanguage} = useLanguagePrefs()
  useEffect(() => {
    const sanitizedLanguage = sanitizeAppLanguageSetting(appLanguage)

    document.documentElement.lang = sanitizedLanguage
    activateLocale(sanitizedLanguage)
  }, [appLanguage])
}
