import { put, take, call, fork, takeEvery } from "redux-saga/effects"
import { RESAGA } from "../actions/home";

function* test() {
    console.log(666)
    yield put(RESAGA({text:888}))
}
export function* requestHome() {
    yield takeEvery('GET', test)
    // while (true) {

    //   yield take(FETCH_JUNSHI)
    //   console.log(1)
    //   yield fork(handleJunShiAction)
    // }
}

export function* watchHome() {
    yield [call(requestHome)]
}
