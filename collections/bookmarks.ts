import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
export interface bookmark {
    title: string;
    url: string;
    category: string;
}
export const Bookmarks= new MongoObservable.Collection<Bookmark>('bookmarks');
Bookmarks.allow({
    insert: function(){
        let user = Meteor.user();
        return !!user;
    },
    update: function(){
        let user = Meteor.user();
        return !!user;
    },
    remove: function(){
        let user = Meteor.user();
        return !!user;
    },
})