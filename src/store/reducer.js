import {combineReducers} from "redux"
import tiebaReducer from "@/components/list/tiebaShow/store/reducer"
export default combineReducers(combineReducers({
teiba:tiebaReducer,
}))