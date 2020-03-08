# Setup for workshop
Under kommer en liste over ting dere trenger for å gjennomføre workshoppen. Hvis dere har noen spørsmål eller dere står fast så er vi tilgjengelige på Slack: http://tiny.cc/adareact stort sett hele tiden fram mot workshoppen. Her er alle spørsmål velkomne!

## Editor:
Når det gjelder Editor står dere fritt til å velge selv, men vi anbefaler VS Code som er mye brukt blant frontendutviklere og det vil derfor være lettere oss å hjelpe dere.

Følg instruksjonene her for å installere Visual Studio Code: https://code.visualstudio.com/download

## Pakkebehandler (Yarn)
Prosjektet er satt opp med pakkebehandleren som heter Yarn. Denne trengs for å kjøre prosjektet. Yarn brukes for å holde orden på hvilke versjoner av de forskjellige bibliotekene vi bruker, og som må installeres. For eksempel er React det største biblioteket vi bruker. Nedenfor er det oppsett for Windows og Mac, så følg den som er relevant for deg.

### Mac
Vi anbefaler å bruke HomeBrew som er en pakkebehandler for Mac: https://brew.sh/index_nb. Du kan installere denne på din maskin ved å åpne en terminal og kopiere inn følge kommando: 

``` /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ```

For å installere yarn (https://classic.yarnpkg.com/en/docs/install/#mac-stable) med homebrew kjører du følgende kommando i terminalen din.
``` brew install yarn ```

### Windows
For å installere Yarn trenger du først å ha Node.js installert. Om du ikke har Node.js på din maskin kan du laste det ned her: https://nodejs.org/en/download/

Følg denne guiden for å laste ned og installere Yarn: https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Git
Git er versjonskontroll for kode, og det du trenger for å hente koden vår. Mac har det installert, men på Windows må du installere det manuelt.

### Installer Git for Windows
Last ned Git for Windows her: https://gitforwindows.org/

###  Klone repo
Klone repo fra GitHub: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

`git clone git@github.com:knowit/react-dashboard-workshop.git`

## Installere avhengigheter
Naviger til prosjektmappen `react-dashboard-workshop` i terminalen og kjør kommandoen `yarn`.

## Kjør appen
I prosjektmappen din i terminalen kjør kommandoen `yarn start`


