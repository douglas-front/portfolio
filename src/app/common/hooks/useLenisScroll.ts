import { useContext } from 'react';
import { LenisScrollContext } from '@/app/common/Contexts/LenisScrollProvider';

export default function useLenisScroll() {
  const context = useContext(LenisScrollContext);

  if (!context) {
    throw new Error('useLenisScroll deve ser usado dentro de um LenisScrollProvider');
  }

  return context;
}
