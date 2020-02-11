import React from 'react';
import Widget from './Widget';

const YesNo = () => {
  const [question, setQuestion] = React.useState('');
  const [lastAskedQuestion, setLastAskedQuestion] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState();

  const updateQuestion = (evt: any) => {
    setQuestion(evt.target.value);
  }

  const fetchImage = () => {
    fetch('https://yesno.wtf/api')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setImageUrl(json.image);
      });
  }

  const askQuestion = (evt: any) => {
    evt.preventDefault();
    setLastAskedQuestion(question);
    fetchImage();
    setQuestion('');
  }

  return (
    <Widget title={lastAskedQuestion}>
      {imageUrl && <img alt={'yes or no gif'} src={imageUrl} />}
      <form onSubmit={askQuestion}>
        Still nytt spørsmål:
        <input value={question} onChange={updateQuestion}></input>
      </form>
    </Widget>
  );
}

export default YesNo;
