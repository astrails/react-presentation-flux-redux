import ReactDom from 'react-dom';
import React    from 'react';
import Home     from 'components/home';
import 'normalize.css';

const app = document.createElement('div');
app.className = "application-container";
document.body.appendChild(app);
ReactDom.render(<Home />, app);

