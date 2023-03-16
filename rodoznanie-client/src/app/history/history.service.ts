import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Story } from '../shared/interfaces/story';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private firestore: Firestore) {}

  //get all stories
  getAllStories(): Observable<Story[]> {
    const storyRef = collection(this.firestore, 'History');
    return collectionData(storyRef, { idField: 'id' }) as Observable<Story[]>;
  }
  //get story by id
  getStoryById() {}
  //create story
  createStory() {}
  //edit story
  editStory() {}
  //delete story
  deleteStory() {}
  //relate to a story*
}
