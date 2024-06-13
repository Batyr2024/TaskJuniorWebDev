function getDateTime() {
  return new Promise((res, rej) => {res()})
}

getDateTime()
  .then(setTimeout(() => console.log(new Date(), "sec1"), 1000))
  .then(setTimeout(() => console.log(new Date(), "sec2"), 2000))
  .then(setTimeout(() => console.log(new Date(), "sec6"), 6000))
  .then(setTimeout(() => console.log(new Date(), "sec15"), 15000))

function gets() {
  return setTimeout(() => {
    console.log(new Date(), "sec1");
    setTimeout(() => {
      console.log(new Date(), "sec2");
      setTimeout(() => {
        console.log(new Date(), "sec6")
        setTimeout(() => {
          console.log(new Date(), "sec15")
        }, 15000)
      }, 6000)
    }, 2000)
  }, 1000)
}

gets()