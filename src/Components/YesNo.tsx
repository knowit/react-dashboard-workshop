import React from 'react';
import Widget from './Widget';

const YesNo = () => {
  const [input, setInput] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState();

  const updateInput = (evt: any) => {
    // Oppgave 6.2: Oppdater input staten med det som
    // blir skrevet inn i input feltet.
  }

  const fetchImage = () => {
    // Oppgave 6.3: Fetch data fra APIet
    // https://yesno.wtf/api og oppdater imageUrl-staten.
  }

  const askQuestion = (evt: any) => {
    evt.preventDefault();

    // Oppgave 6.3: Kall på fetchImage-metoden for å hente data
    // og oppdater question- og input-staten.
  }

  React.useEffect(() => {
    // Oppgave 7.1: Fetch data etter første render.
  }, []);

  return (
    <Widget title={question}>
      {
        imageUrl &&
        <img alt={'yes or no gif'} src={imageUrl} />
      }
      <form
        className="yesOrNoForm"
        onSubmit={askQuestion}
      >
        <label
          htmlFor="yesOrNoQuestionInput"
        >
          Still nytt spørsmål:
        </label>
        <input
          id="yesOrNoQuestionInput"
          value={input}
          onChange={updateInput}
        />
      </form>
    </Widget>
  );
}

export default YesNo;
