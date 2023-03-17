import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Story } from '../shared/interfaces/story';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private basepath = '/images';
  constructor(
    private firestore: Firestore,
    private afs: AngularFirestore,
    public authService: AuthService
  ) {}

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
  createStory(name: string, address: string, history: string, image: string) {
    const story: Story = {
      id: '',
      name: name,
      address: address,
      history: history,
      image: image,
      relatives: [],
      userId: this.authService.getUserId(),
      user: this.authService.getUserNames(),
    };
  }
  //edit story
  editStory(story: any, storyId: string) {
    const storyDocRef = doc(this.firestore, `History/${storyId}`);
    return setDoc(storyDocRef, story);
  }
  //delete story
  deleteStory(storyId: string) {
    const storyDocRef = doc(this.firestore, `History/${storyId}`);
    return deleteDoc(storyDocRef);
  }
  //relate to a story*
}
