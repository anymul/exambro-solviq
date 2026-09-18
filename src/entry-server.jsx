import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './AppRoutes.jsx';

export function render(url) {
  const helmetContext = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <AppRoutes />
      </MemoryRouter>
    </HelmetProvider>
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
}
