export function* workerSaga() {}

export function* watchSaga() {
  console.log('123');
}

export default function* rootSaga() {
  yield watchSaga();
}
