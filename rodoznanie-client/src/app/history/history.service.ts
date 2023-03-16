import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private firestore: Firestore) {}

  //get all stories
  getAllStories() {}
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
