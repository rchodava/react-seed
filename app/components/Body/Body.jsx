import './_Body.scss';
import React from 'react';

class Body extends React.Component {

  renderItem(item) {
    return (
      <li key={item.id}>{item.label}</li>
    );
  }

  render() {
    return (
      <div className={'body'}>
        <h1 className={'body__header'}>React Seed</h1>
        <p>This is an example seed app, powered by React, ES6 &amp; webpack.</p>
        <p>Here is some example data:</p>
        <ul>
          {this.props.items.map(this.renderItem, this)}
        </ul>
        <h2>Getting started</h2>
        <p>Here's a couple of things you can do to get familiar with the project:</p>
        <ol>
          <li>Change some of the text the body component. You can find it here: <pre>./app/components/Body/Body.jsx</pre></li>
          <li>Style up the Body component. Give it a background color. (You shouldn't need to reload your browser to view the changes). Find the Sass file here: <pre>./app/components/Body/_Body.scss</pre></li>
          <li>Change the data rendered above. Look in: <pre>./app/components/App/App.jsx</pre> Understand how data flows from the actions into the stores and then into the Body component.</li>
        </ol>
      </div>
    );
  }
}

Body.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Body;
