import { all, put, call, select, takeEvery } from 'redux-saga/effects'
import { TABS_ACTIONS, tabsSearchFetched, tabsSearchError } from '../actions/tabs'
import { getTabs } from '../../services/api'

export function* rootSaga() {
  yield all([watchFetchTabs()])
}

export function* watchFetchTabs() {
  yield takeEvery(TABS_ACTIONS.REQUESTED, fetchTabs)
}

export function* fetchTabs({ payload }) {
  const tabType = yield select(state => state.preferences.type)

  const tabs = yield call(getTabs, payload, tabType)

  if (!tabs) {
    yield put(tabsSearchError('Found no tabs meeting your criteria'))
    return
  }
  yield put(tabsSearchFetched(tabs))
}
