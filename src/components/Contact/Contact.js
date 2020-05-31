import React from "react";
import { deleteContacts } from "../../redux/actions/contacts";
import { useDispatch } from "react-redux";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(deleteContacts(id));

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>

      <button type="button" id={id} className="delete" onClick={deleteContact}>
        X
      </button>
    </>
  );
};

export default Contact;
