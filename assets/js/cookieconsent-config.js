import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "middle center",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "left",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "de",
        translations: {
            de: {
                consentModal: {
                    title: "Präferenzen für die Zustimmung!",
                    description: "Wir verwenden nur technisch notwendige Cookies, und (simulierte) Analytics-Cookies nur nach Ihrer Einwilligung.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"/privacy_policy/\">Datenschutzerklärung</a>\n<a href=\"/impressum/\">Impressum</a>"
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Modal schließen",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Diese Website verwendet ausschliesslich technisch notwendige Cookies, und (simulierte) Analytics-Cookies nur nach Ihrer Einwilligung."
                        },
                        {
                            title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Technisch notwendige Cookies, die zur Bedienung dieser Website beitragen.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytische Cookies",
                            description: "Optionale Cookies, die zu (simuliarten) Analytics Funktionalitäten beitragen.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Weitere Informationen",
                            description: "Bei weiteren Fragen, bitte wenden Sie sich an unsere <a class=\"cc__link\" href=\"/privacy_policy/\">Datenschutzerklärung</a>, oder <a class=\"cc__link\" href=\"/contact/\">kontaktieren</a> Sie uns."
                        }
                    ]
                }
            }
        }
    }
});