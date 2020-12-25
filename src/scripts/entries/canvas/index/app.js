const $select = document.querySelector('.select')

$select.addEventListener('change', onChange)

function onChange(e) {
  console.log(e)
  switch (e.target.value) {
    case '1':
      import(/* webpackPrefetch: true */ '@/canvas/anglebouncemulti')
      break
    case '2':
      import(/* webpackPrefetch: true */ '@/canvas/bouncy-balls')
      break
    case '3':
      import(/* webpackPrefetch: true */ '@/canvas/throwing')
      break
    case '4':
      import(/* webpackPrefetch: true */ '@/canvas/tree')
      break
    default:
  }
}
