var invocation = new XMLHttpRequest();

export const GetApi = async (URL) => {

  return new Promise((resolve, reject) => {

    const xhr = invocation;

    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.open('get', URL, true);
    xhr.send();
  });


};
