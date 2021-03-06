const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 10,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((items) => {
                    if (items.id === action.userID) {
                        return {...items, followed: true}
                    }
                    return items;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((items) => {
                    if (items.id === action.userID) {
                        return {...items, followed: false}
                    }
                    return items;
                })
            }

        case SET_USERS: {
            return {...state, users: [...action.users]};
            // return {...state, users: [...state.users, ...action.users]}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCount: action.count};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, toggleIsFetching: action.isFetching};
        }
        default:
            return state;
    }
    ;
};

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, count: isFetching});

export default usersReducer;