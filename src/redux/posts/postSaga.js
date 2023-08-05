import { call,put, takeLatest } from "redux-saga/effects";
import { USER_POST_REQUEST } from "./postActionType";
import { toast } from "react-toastify";
import { userPostFailure, userPostSuccess } from "./postAction";
import { userPostApi } from "./userPostApi";

//worker saga
function* userPostWorkerSaga(action) {
    try {
      const data = yield call(userPostApi, action.payload);
      yield put(userPostSuccess(data));
      //toastify
      toast.success(data.message);
    } catch (error) {
      //toastify
      toast.error(error.response.data.message);
      yield put(userPostFailure(error.response.data));
    } finally {
      toast.clearWaitingQueue();
    }
  }

  //watcher saga effects
export function* PostWatcherSaga() {
  yield takeLatest(USER_POST_REQUEST, userPostWorkerSaga);
}