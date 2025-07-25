import { MMKV } from "react-native-mmkv";

const storage = new MMKV({
  id: "test",
  encryptionKey: "test",
});

export const setItem = (key: string, value: string): void => {
  storage.set(key, value);
};

export const getItem = (key: string): string | undefined => {
  return storage.getString(key);
};

export const deleteItem = (key: string): void => {
  storage.delete(key);
};

export const clear = (): void => {
  storage.clearAll();
};
