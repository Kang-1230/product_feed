export type ViewMode = 'list' | 'grid';

export type StorageData<T> = {
  value: T;
  expire: number;
};
