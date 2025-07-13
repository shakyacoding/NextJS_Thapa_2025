import { db } from "@/config/db.jsx";
import {cache} from 'react';

export const dynamic = 'force-dynamic';

const ContactView = async () => {

  const contacts = await getAllContacts()



  return (
    <>
      <p>Total Contact: {contacts.length}</p>
      <ContactLists contacts={contacts} />
    </>
  );
};

export default ContactView;

const ContactLists = async () => {
  const contacts = await getAllContacts()
  return (
    <>
      <div className="flex justify-center align-middle">

        <ul className="bg-sky-300 border-2 border-red border-dashed">
          {contacts.map((data) => {
            return (
              <>

                <li key={data.id}>{data.id}, Name {data.full_name} , Email {data.email} , message {data.message} </li>

              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

const getAllContacts =  cache( async () => {
  const [contacts] = await db.execute("Select * from contact_form");
  console.log('fetching contact')
  return contacts;
})