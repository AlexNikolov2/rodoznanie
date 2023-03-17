import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Story } from '../shared/interfaces/story';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private firestore: Firestore) {}

  //get all stories
  getAllStories(): Observable<Story[]> {
    const storiesRef = collection(this.firestore, 'History');
    return collectionData(storiesRef, { idField: 'id' }) as Observable<Story[]>;
  }
  //get story by id
  getStoryById(id: string) {
    const storyRef = doc(this.firestore, `History/${id}`);
    return docData(storyRef, { idField: 'id' }) as Observable<Story[]>;
  }
  //create story
  createStory() {}
  //edit story
  editStory() {}
  //delete story
  deleteStory() {}
  //relate to a story*
}
