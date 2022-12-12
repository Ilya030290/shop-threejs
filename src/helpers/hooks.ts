import React, { useCallback } from 'react';

export const useGetModel = (modelName: string) => {

  const [model, setModel] = React.useState<React.FunctionComponent | null>(null);

  const fetchModel = useCallback(async () => {
    const module = await import(`./../models/${modelName}.tsx`);

    setModel(module.default);
  }, [modelName]);

  modelName ? fetchModel() : setModel(null);

  return { model };
};
