import { useEffect, useState } from 'react';

type ViewMode = 'list' | 'grid';

type StorageData<T> = {
  value: T;
  expire: number;
};

export default function useViewMode() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const storage = {
    set<T>(key: string, value: T, expireSec = 60 * 60 * 24) {
      const data: StorageData<T> = {
        value,
        expire: Date.now() + expireSec * 1000,
      };

      localStorage.setItem(key, JSON.stringify(data));
    },
    get<T>(key: string): T | null {
      const json = localStorage.getItem(key);
      if (!json) return null;

      //JSON 파싱 실패 시 catch로 대처
      try {
        const data: StorageData<T> = JSON.parse(json);

        if (Date.now() > data.expire) {
          localStorage.removeItem(key);
          return null;
        }

        return data.value;
      } catch {
        localStorage.removeItem(key);
        return null;
      }
    },
  };

  useEffect(() => {
    const savedViewMode = storage.get<ViewMode>('viewMode');

    if (savedViewMode) {
      setViewMode(savedViewMode);
    } else {
      const randomViewMode = Math.random() < 0.5 ? 'list' : 'grid';
      setViewMode(randomViewMode);

      storage.set('viewMode', randomViewMode);
    }
  }, []);

  return viewMode;
}
