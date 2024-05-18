const contents = document.getElementById('contents')

const toggle = (ele) => {
    if (ele.classList.contains('hide')) {
        ele.classList.remove('hide');
      } else {
        ele.classList.add('hide');
      }
}

