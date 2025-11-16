export const getData = () => {

  return fetch('https://ozon-test-js-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
      return response.json()
    })


}