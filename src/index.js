import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import { cats } from './cats'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Card id={cats[0].id} name={cats[0].name} email={cats[0].email}/>
	<Card id={cats[1].id} name={cats[1].name} email={cats[1].email}/>
	<Card id={cats[2].id} name={cats[2].name} email={cats[2].email}/>
	<Card id={cats[3].id} name={cats[3].name} email={cats[3].email}/>
	<Card id={cats[4].id} name={cats[4].name} email={cats[4].email}/>
	<Card id={cats[5].id} name={cats[5].name} email={cats[5].email}/>
	<Card id={cats[6].id} name={cats[6].name} email={cats[6].email}/>
	<Card id={cats[7].id} name={cats[7].name} email={cats[7].email}/>
	<Card id={cats[8].id} name={cats[8].name} email={cats[8].email}/>
	<Card id={cats[9].id} name={cats[9].name} email={cats[9].email}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();