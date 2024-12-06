'use client';

import { createContext, useContext } from 'react';
import { Integrations } from '@gitroom/frontend/components/launches/calendar.context';
import dayjs from 'dayjs';

export const IntegrationContext = createContext<{
  date: dayjs.Dayjs;
  integration: Integrations | undefined;
  value: Array<{
    content: string;
    id?: string;
    image?: Array<{ path: string; id: string }>;
  }>;
}>({ integration: undefined, value: [], date: dayjs() });

export const useIntegration = () => useContext(IntegrationContext);
