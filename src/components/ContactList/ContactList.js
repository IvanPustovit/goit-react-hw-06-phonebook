import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import "./ContactList.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const getFilterContacts = (filter, contacts) =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  const filteredContacts = getFilterContacts(filter, contacts);

  return (
    <div>
      <TransitionGroup component="ul">
        {filteredContacts.length
          ? filteredContacts.map((contact) => (
              <CSSTransition
                key={contact.id}
                classNames="list-item"
                timeout={250}
                mountOnEnter
                unmountOnExit
              >
                <li className="list-item">
                  <Contact {...contact} />
                </li>
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition
                key={contact.name}
                classNames="list-item"
                timeout={250}
                mountOnEnter
                unmountOnExit
              >
                <li className="list-item">
                  <Contact {...contact} />
                </li>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

export default ContactList;
