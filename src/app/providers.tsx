'use client';

import AppHeader from '@/components/Header/AppHeader';
import { Content } from '@carbon/react';

export function Providers({ children }: any) {
  return (
    <div>
      <AppHeader />
      <Content>{children}</Content>
    </div>
  );
}
