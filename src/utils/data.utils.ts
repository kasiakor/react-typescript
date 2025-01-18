export const getData = async <T>(url: string): Promise<T> => {
  //if we return await we need generic, we do not know the return type
  // type T will be passed to the promise
  // WE WILL KNOW THE RETURN TYPE WHEN WE CALL THE GENERIC FUNCTION WITH THE URL
  const response = await fetch(url);
  return await response.json();
};
