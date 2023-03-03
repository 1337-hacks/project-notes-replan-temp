import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute';
import { auth } from "../config/firebase";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { addDoc, collection, onSnapshot, getDocs, DocumentData } from 'firebase/firestore';

export default function Dashboard() {

  interface Note {
    // Define the interface for the Note object here
    // For example:
    id: string;
    title: string;
    content: string;
  }

  const { user } = useAuth()
  const db = firebase.firestore();

  function createNewCollection() {
    db.collection(user.uid).add({
      title: "New Note",
      content: ""
    })
    .then(() => {
      console.log('New collection created successfully.');
    })
    .catch((error: any) => {
      console.error('Error creating collection:', error);
    });
  }

  const [noteData, setNoteData] = useState<Note[]>([]);

  const getNotes = async (): Promise<Note[]> => {
    if (!user || !user.uid || user.uid === '') {
      throw new Error('Invalid user object or empty uid');
    }

    const noteCol = collection(db, user.uid);
    const noteSnapshot = await getDocs(noteCol);
    const noteList: Note[] = noteSnapshot.docs.map((doc) => {
      const data = doc.data() as DocumentData;
      const note: Note = {
        id: doc.id,
        title: data.title,
        content: data.content,
      };
      return note;
    });
  
    return noteList;
  };

  useEffect(() => {
  const fetchData = async () => {
      const notes = await getNotes();
      setNoteData(notes);
    };
    fetchData();
  }, []);
  

  
  return (
    <>
      <ProtectedRoute>
        <div>
          <h1>Dashboard</h1>
          {/* <h2>
            <Link href="/workspace">To Workspace</Link>
          </h2> */}

          <Link href="/workspace"><button type="button" className="btn btn-primary" onClick={createNewCollection}>Create new note</button></Link>

          <div className="container">
            {noteData.map((doc, index) => {
              return (
                <div key={index}>
                  <p>Added Note!</p>
                </div>
              )
            })}
          </div>

          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </div>
        
      </ProtectedRoute>
    </>
  );
}