import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contactItem) => (
        <li key={contactItem.id} className={css.listItem}>
          <Contact
            id={contactItem.id}
            name={contactItem.name}
            number={contactItem.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
