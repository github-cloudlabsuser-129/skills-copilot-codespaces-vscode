import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
      />
      <ReactMarkdown children={markdown} />
    </div>
  );
}
function reverseSentence(sentence) {
  let reversed = sentence.split(' ').reverse().join(' ');
  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}
function extractNames(data) {
  return data.map(subArray => subArray.map(obj => obj.name)).flat();
}

const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ],
  [
    { name: 'Bob', age: 40 }
  ]
];

console.log(extractNames(data)); // ["John", "Jane", "Bob"]