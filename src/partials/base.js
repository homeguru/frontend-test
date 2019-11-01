export const getQueryString = (params) => {
    let search = params ? params : window.location.search 
    return search === '' ? {} : JSON.parse('{"'+ search.substring(1).replace(/&/g, '","').replace(/=/g, '":"') +'"}')
}