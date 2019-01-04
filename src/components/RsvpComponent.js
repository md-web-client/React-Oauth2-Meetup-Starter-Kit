import React from 'react';

const buttonStyle = {
  borderRadius: '.5rem',
};

export default class RsvpComponent extends React.Component {
  render() {
    const Header = () => <div id="Header">Logged In as UserName</div>;

    const RsvpButtons = () => (
      <span id="RsvpButton" style={{ display: 'flex' }}>
        <span style={{ minWidth: '170px' }}>
          <button style={buttonStyle}>Rsvp Yes All</button>
        </span>
        <span style={{ minWidth: '104px' }}>
          <button style={buttonStyle}>Rsvp No All</button>
        </span>
        <span style={{ width: '100%', textAlign: 'center' }}>
          Status: So far no rsvp logged
        </span>
      </span>
    );

    const SearchInput = (
      { label } // label
    ) => (
      <div
        id="SearchInput"
        style={{ display: 'flex', padding: '3px 0px 3px 0px' }}
      >
        <span style={{ minWidth: '170px' }}>{label}</span>
        <span style={{ width: '100%' }}>
          <input
            style={{ width: '95%' }}
            type="text"
            name={label}
            placeholder="(provides all meetups results if not modified)"
          />
        </span>
      </div>
    );

    const Results = () => (
      <div id="Results">
        <div>Results</div>
        <div>
          --------------------------------------------------------------------------------
        </div>
      </div>
    );

    return (
      <section style={{ 
          backgroundColor: 'powderblue', paddingTop: '20px', paddingLeft: '20px',
          minWidth: '466px', minHeight: 'calc(100vh - 36px)',
      }} >
        <Header />
        <br />
        <RsvpButtons />
        <br />
        <SearchInput label="Search Group" />
        <SearchInput label="Search Common Title" />
        <br />
        <div className="flex">
          <button>Search</button>
        </div>
        <br />
        <Results />
      </section>
    );
  }
}
