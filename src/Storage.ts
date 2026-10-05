// localStorageUtils.ts

/**
 * Fetches data from localStorage.
 * @param key The key of the item to fetch from localStorage.
 * @returns The parsed JSON data or null if the item does not exist.
 */
export function getLocalStorageItem<T>(key: string): T | null {
    const Data:any = localStorage.getItem('UserBase')
    
    let ExtractData:any = '';
    if(Data){
      ExtractData = JSON.parse(decodeURIComponent(Data));
        return ExtractData.data[0][key];
    }
    
    
    // const item = localStorage.getItem(key);
    // if (item) {
    //   try {
    //     return JSON.parse(item) as T;
    //   } catch (error) {
    //     console.error(`Error parsing JSON for key "${key}":`, error);
    //     return null;
    //   }
    // }
    return null;
  }
  /**
   * Sets data in localStorage.
   * @param key The key of the item to set in localStorage.
   * @param value The value to set in localStorage.
   */
  export function getLocalArraySrorage<T>(): T | null {
    const Data:any = localStorage.getItem('UserBase')
    
    let ExtractData:any = '';
    if(Data){
      ExtractData = JSON.parse(decodeURIComponent(Data));
        return ExtractData.data[0];
    }
    
    
    return null;
  }
  /**
   * 
   * Sets data in localStorage.
   * @param key The key of the item to set in localStorage.
   * @param value The value to set in localStorage.
   */
  export function setLocalStorageItem<T>(key: string, value: T): void {
    try {
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    } catch (error) {
      console.error(`Error stringifying JSON for key "${key}":`, error);
    }
  }
    /**
   * Sets data in localStorage.
   * @param key The key of the item to set in localStorage.
   * @param value The value to set in localStorage.
   */
    export function getLocalMainStorage<T>(key: string): void {
      const Data:any = localStorage.getItem('UserBase')
      let ExtractData:any = '';
      if(Data){
        ExtractData = JSON.parse(decodeURIComponent(Data));
          return ExtractData[key];
      }
    }
  
  /**
   * Removes an item from localStorage.
   * @param key The key of the item to remove from localStorage.
   */
  export function removeLocalStorageItem(key: string): void {
    localStorage.removeItem(key);
  }
  
  /**
   * Clears all items from localStorage.
   */
  export function clearLocalStorage(): void {
    localStorage.clear();
  }
  