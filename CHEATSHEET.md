# Oppgave 2

## Sende med props til et component

```javascript
// React komponent
const MyComponent = (props) => (
  <div>
    <p>{props.text}</p>
    {props.children}
  </div>
);

// Bruk av komponentet
<MyComponent
  // Text er et prop som blir sendt som en attributt til komponentet
  // MyComponent. I MyComponent kan du få tilgang til verdien i text via
  // props objectet som MyComponent mottar som et argument.
  text='Dette er litt tekst'
>
  {/* Alt som kommer mellom åpne- og lukketaggene til MyComponent vil bli samlet i et prop som heter children. Du får tilgang til proppet children på samme måte som andre props du sender til MyComponent. */}
  <p>Her er noe mer som skal rendres av MyComponent</p>
</MyComponent>
```

## Destrukturering av props

```javascript
const MyComponent = ({ text, children }) => (
  <div>
    <p>{text}</p>
    {children}
  </div>
);
```

