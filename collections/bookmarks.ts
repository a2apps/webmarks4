import { MongoObservable } from 'meteor-rxjs';
export interface bookmark {
    title: string;
    url: string;
    category: string;
}
export const Bookmarks= new MongoObservable.Collection<bookmark>('bookmarks');