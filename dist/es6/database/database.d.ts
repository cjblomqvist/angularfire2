import { FirebaseListObservable } from '../utils/firebase_list_observable';
import { FirebaseObjectObservable } from '../utils/firebase_object_observable';
import { FirebaseListFactoryOpts } from '../utils/firebase_list_factory';
import { FirebaseObjectFactoryOpts } from '../utils/firebase_object_factory';
export declare class FirebaseDatabase {
    private fbUrl;
    constructor(fbUrl: string);
    list(urlOrRef: string | Firebase, opts?: FirebaseListFactoryOpts): FirebaseListObservable<any[]>;
    object(urlOrRef: string | Firebase, opts?: FirebaseObjectFactoryOpts): FirebaseObjectObservable<any>;
}
