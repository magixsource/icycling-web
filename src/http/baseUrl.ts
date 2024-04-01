const getBaseUrl = () => {
  let BASE_URL = '';
  console.log('环境   -> '+process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://127.0.0.1:8080';
  } else {
    BASE_URL = ''
  }
  return BASE_URL
}
export default getBaseUrl;