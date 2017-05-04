// action types
const INIT_MODLIST = 'INIT_MODLIST'

// reducer
export default function (state, action) {
    if (!state) {
        state =  {
            homedata:{}
        }
    }
    switch (action.type) {
        case INIT_MODLIST:
            // 初始化评论
            return { homedata: action.homedata }
        default:
        return state
    }
}
// action creators
export const initModList = (action) => {
    return { type: INIT_MODLIST, action }
}