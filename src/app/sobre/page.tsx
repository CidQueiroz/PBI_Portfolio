'use client';

import React from 'react';
import { AboutPage } from '@cidqueiroz/cdkteck-ui';

export default function SobrePage() {
  return (
    <div className="sovereign-layout-container">
      <AboutPage appContext="Hub Oficial" />
    </div>
  );
}