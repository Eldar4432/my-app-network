import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hello, my name is Eldar', like: 17847381},
                {id: 1, message: 'Hello, my name is Aidar', like: 33847381},
            ],

            newPostText: 'Hello, my message is  '

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Eldar'},
                {id: 2, name: 'Damir'},
                {id: 3, name: 'Meerim'},
                {id: 4, name: 'Roza'},
                {id: 5, name: 'Talap'},
                {id: 6, name: 'Max'},
            ],
            messages: [
                {id: 0, message: 'Привет'},
                {id: 1, message: 'Как дела?'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How are you'},
                {id: 4, message: 'Hello'},
            ],

            newMessageBody: ''

        },
        sidebar: {}
    },
    _callSubscribe() {
        console.log('state changet');
    },

    getSate() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state);
    },
};

export default store;
window.store = store;