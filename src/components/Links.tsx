import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import db from "../firebase";
import { addDoc, collection, query, onSnapshot, orderBy, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { ILinks, ILinksData } from "../interfaces/i-links";
import { toast } from "react-toastify";


const Links = () => {

  const emptyArray: ILinksData[] = [];
  const [links, setLinks] = useState(emptyArray);

  const q = query(collection(db,'links'), orderBy('timestamp', 'desc'));

  const addOrEditLink = (linkObject: ILinks) => {
    const updatedTask = {...linkObject, timestamp: serverTimestamp()};
    addDoc(collection(db, 'links'), updatedTask)
    toast('New Link Added', {
      type: 'success',
      autoClose: 2000
    })
  }

  const onDeleteLink = (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this link?');
    if (confirmDelete) {
      deleteDoc(doc(db, 'links', id))
      toast('Link Removed Successfully', {
        type: 'success',
        autoClose: 2000
      })
    }
  }

  const getLinks = () => {
    onSnapshot(q, (snapshot) => {
      const docs: any[] = [];
      // eslint-disable-next-line array-callback-return
      snapshot.docs.map(doc => {
        docs.push({...doc.data(), id: doc.id});
      })
      console.log(docs);
      
      setLinks(docs)
    })
  }

  useEffect(() => {
    getLinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <LinkForm addOrEditLink={addOrEditLink} />
      <div className="col p-2">
        {links.map(link => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <div>
                  <i className="material-icons text-danger" onClick={() => onDeleteLink(link.id)}>close</i>
                  <i className="material-icons" onClick={() => onDeleteLink(link.id)}>create</i>
                </div>

              </div>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">Go to Website</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Links;