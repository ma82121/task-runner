import '~/src/styles/formal-theme.scss'

console.log('/shop.html')

const $select = document.querySelector('.select')

$select.addEventListener('change', onChange)

function onChange(e) {
  switch (e.target.value) {
    case '1':
      import(/* webpackPrefetch: true */ '@/entries/shop/shop1.js')
      break
    case '2':
      import(/* webpackPrefetch: true */ '@/entries/shop/shop2.js')
      break
    default:
      break
  }
}
