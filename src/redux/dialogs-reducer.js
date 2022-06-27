const UPDATA_NEW_MESSAGE_BODY = 'UPDATA-NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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

};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy

    switch (action.type) {
        case UPDATA_NEW_MESSAGE_BODY:
            stateCopy = {...state,
                newMessageBody: action.newBody
            };
            return stateCopy;

        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
            };
            return stateCopy;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updataNewMessageBodyCreator = (body) => ({type: UPDATA_NEW_MESSAGE_BODY, newBody: body})

export default dialogsReducer;