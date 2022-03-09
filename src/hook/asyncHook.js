import Hook from "./syncHook";
class AsyncHook extends Hook {
  call(...args, done) {
    const fns = this.hookFns
    let i = fns.length
    let next = done
    while(i) {
      let fn = fns[--i]
      let _next = next
      next = () => fn(...args, _next)
    }
    next()
  }
  callParallel(...args, done) {
    const fns = this.hookFns
    let count = fns.length
    let _done = () => {
      count--
      if (count === 0) {
        done()
      }
    }
    fns.forEach(fn => fn(...args, _done))
  }
  callParallelN(...args, done) {
    const fns = this.hookFns
    let count = fns.length
    let cur = 0
    let limit = N < fns.length ? N : fns.length
    let _done = () => {
      count--
      if (count === 0) {
        done()
      } else if (cur < fns.length) {
        fns[cur++](...args, _done)
      }
    }
    for (; cur < limit; cur++) {
      fns[cur](...args, _done)
    }
  }
}

export { AsyncHook };
