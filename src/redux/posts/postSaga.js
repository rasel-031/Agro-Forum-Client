import { call, put, takeEvery} from "redux-saga/effects";
import { USER_POST_REQUEST, USER_STORIES_REQUEST } from "./postActionType";
import { toast } from "react-toastify";
import { userPostFailure, userPostSuccess, userStoriesFailure, userStoriesSuccess } from "./postAction";
import { userPostApi } from "./userPostApi";
import { userStoriesApi } from './userStoriesApi';

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

function* userStoriesWorkerSaga() {
  try {
    const data = yield call(userStoriesApi, null);
    yield put(userStoriesSuccess(data));
  } catch (error) {
    yield put(userStoriesFailure(error.response.data));
  }
}

//watcher saga effects
export function* PostWatcherSaga() {
  yield takeEvery(USER_POST_REQUEST, userPostWorkerSaga);
  yield takeEvery(USER_STORIES_REQUEST, userStoriesWorkerSaga);
}
