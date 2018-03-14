/**
 * redux调试工具
 */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor defaultIsVisible={false}
               toggleVisibilityKey="alt-h"
               changePositionKey="alt-q">
    <LogMonitor />
  </DockMonitor>
);
