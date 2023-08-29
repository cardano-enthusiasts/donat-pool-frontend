import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '@/shared/types';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
