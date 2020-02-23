# Oppgaver

Start appen med `yarn start`.

Nedenfor ligger en beskrivelse av alle oppgavene vi skal gjennom for å lage vårt private dashboard. Hver oppgave er delt opp i flere deloppgaver. Målet er at alle, med hjelp, skal klare å løse den første deloppgaven for hver oppgave. I tillegg er det en noen deloppgaver med høyere nivå, begi deg ut på de om du får tid.

En enkel måte å debugge appen din på er ved bruk av `console.log` for å printe ut hvilken data man har tilgjengelig. (https://developer.mozilla.org/en-US/docs/Web/API/Console).

Om du står fast er det viktig at du spør om hjelp. Noen gang trenger man å diskutere med andre eller få et dytt i riktig retning for å finne løsningen. Vi er her for å hjelpe!

## Fellesoppgave

Åpne `App.tsx` og oppdater headingen på dashboardet med ditt eget navn.

## Oppgave 1

**Enkel rendering**

I første oppgave skal vi lage en liste over alle forelesningene man har.

TODO:
- SLIDES OM JSX/HTML.
- GI CHEATSHEET OM HTML?

### 1.1
Åpne ` Lectures.jsx` og fyll ut lista med dine forelesninger i JSX. Ser du at det dukker opp i appen?

### 1.2
Lista ble fort veldig lang. Flytt informasjonen ut i ei liste av strings og iterer over den for å lage ei ny liste med <li>-elementer, og vis frem denne.

TODO:
- Legg til map funksjonen i cheatsheet
- HINT OM CONSOLE.LOG FOR Å SE AT DEN BLIR RIKTIG?
- HINT OM HVORDAN MAN VISER JS I JSX?

### 1.3
I stedet for å bruke for så kan man bruke noe som heter map. Les mer om dette her: (Link). (Vi skal gå gjennom map på et senere tidspunkt i workshopen, så fortvil ikke om dette var vanskelig.) IKKE GÅ GJENNOM MAP HER, MEN LA FOLK UTFORSKE SELV?

## Oppgave 2
GÅ GJENNOM GJENBRUK AV KOMPONENTER, OG CHILDREN.
Åpne `Widget.tsx`, og sammenlign den med Lectures-komponenten vi nettopp var i. Du ser kanskje at de er ganske like?

### 2.1
I `Lectures.jsx`, fjern de taggene som er like i filene og erstatt med `<Widget>`.

HINT? DET ER GJORT I `ASSIGNMENT.TSX`.

### 2.2
Nå får du kanskje opp at ingen tittel er definert?

Prøv å send med en `title`-prop til `Widget`, å se hva som skjer.

https://reactjs.org/docs/components-and-props.html#composing-components

### 2.3
Etterhvert kan man ha veldig mange props som sendes inn til et komponent. Et triks for å gjøre koden mer lesbar er å dekonstruere props. Les hvordan her [unpacking fields from objects passed as function parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_function_parameter) og prøv å dekonstruer propsene til `Widget`.

## Oppgave 3

**Intro til TypeScript**

Enn så lenger har vi jobbet med jsx. Nå skal vi prøve å gjøre om til å bruke typescript. Denne linken kan være nyttig underveis: URL TIL RELEVANT KILDE.

### 3.1
Vi starter med `Widget.jsx`. Prøv å endre filnavnet til `Widget.tsx`. Hvilke feilmeldinger får du? Rett opp i disse ved å definere typene.

### 3.2
Fortsett med å endre `Lectures.jsx` til å bruke TypeScript.

## Oppgave 4
GÅ GJENNOM MAP - HVORFOR KEYS
Nå skal vi lage en ny komponent/Widget til dashboardet vårt, `Assignments.tsx`.

### 4.1
Legg til widgeten i dashboardet ditt.

**HINT:** Gjøres i `App.tsx`.

### 4.2
MÅ MAN LEGGE TIL FAG OG ASSIGNMENTS FØRST KANSKJE?

Map over fagene og lag et `<button>` for hvert fag.

### 4.3
Map over øvingene til det første faget og fyll ut lista.

**Hint:** Ligner veldig på oppgave 1.3 og forrige oppgave. Legg på `key={index}` som en prop på listeelementet.

## Oppgave 5
### 5.1
Kommenter inn state-hooken i toppen av Assignments-komponenten.

```javascript
const [activeTab, setActiveTab] = React.useState(0);
```

Legg til en `onClick`-handler på fagknappen som oppdaterer staten `activeTab` med riktig fagindeks når du trykker på knappen.

HINT: Fyll inn updateActiveTab-metoden
HINT: Hvordan kalle metoden når man klikker?

### 5.3
Nå er det vanskelig å se hvilken tab som er aktiv. Legg til en klasse `activeTab` på `<button>`-elementet om indeksen til taben er lik som `activeTab`-staten slik at det blir lettere å se.

### 5.3
Nå vises lista med oppgaver til det første faget hele tiden. Bruk `activeTab`-staten til å vise riktig fag. Ser du at listen over øvinger endrer seg når du endrer fag?

### 5.4
For å se hvilke øvninger som er godkjent kan du legge til klassen `approvedAssignment` for de fagene som godkjent.

### 5.5
SKAL VI HA EN OPPGAVE HER FOR Å LEGGE TIL STATUSMELDINGEN FOR OM ET HELT FAG ER GODKJENT ELLER IKKE?

## Oppgave 6
GÅ GJENNOM FETCHING AV DATA

### 6.1
Legg widgeten `YesNo` til dashboardet ditt slik som du gjorde i oppgave 5.1.

### 6.2
Oppdater `updateQuestion`-metoden til å oppdatere `question`-staten når du skriver noe i input feltet. ELLER KANSKJE DENNE METODEN SKAL VÆRE FERDIG IMPLEMENTERT SIDEN FOKUSET HER ER FETCHING? Kanskje vi kan at folk kan velge selv, fokuset er fetching, men for de som har lyst å prøve seg så kan de skrive metoden selv også?

### 6.3
Noe med å submitte formet

### 6.4
Fetche data fra api og oppdatere `imageUrl`-staten, `lastAskedQuestion` og resette `question`.

### 6.5
Legg inn et default spørsmål og hent et svar når komponenten rendres første gangen ved hjelp av `useEffect`.

## Ekstraoppgaver
### Lag en ny widget helt fra bunnen av
Her finner du en liste over åpne APIer. Kan du bruke et av dem til å lage en ny widget til dashboardet ditt?

LISTE OVER APIER
