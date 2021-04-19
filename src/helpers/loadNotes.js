import { db } from "../firebase/firebase-config"


export const loadNotes = async (uid) => {

  const notesSnap = db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  console.log(notesSnap);

  return notes;

}