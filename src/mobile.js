const formatPhone = (mobile) => {
  let phone = ''
  if (typeof mobile !== 'string') {
    phone = String(mobile)
  } else {
    phone = mobile
  }
  if (/^1\d{10}$/i.test(phone)) {
    return phone.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
  } else {
    throw new Error('输入的不是手机号')
  }
}
export {
  formatPhone
}