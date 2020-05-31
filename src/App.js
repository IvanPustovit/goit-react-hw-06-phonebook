import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import { getLocalStorage } from "./redux/actions/contacts";

import storage from "./utils/storage";
import "./App.css";

const contactsData = storage.get("contacts");

class App extends Component {
  componentDidMount() {
    this.props.add(contactsData);
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.props.contacts) {
      storage.save("contacts", this.props.contacts);
    }
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          classNames="phonebook"
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <div className="phonebook">
            <h1>Phonebook</h1>
          </div>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const MSTP = (state) => ({ contacts: state.contacts });
const MDTP = (dispatch) => ({
  add: () => dispatch(getLocalStorage(contactsData)),
});

export default connect(MSTP, MDTP)(App);
