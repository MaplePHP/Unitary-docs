import React, { useEffect, useState } from 'react';

export default function SearchShortcutKeys(props) {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const isMacPlatform = navigator.userAgentData
      ? navigator.userAgentData.platform === 'macOS'
      : navigator.userAgent.includes('Mac');

    setIsMac(isMacPlatform);
  }, []);

  return (
    <span {...props}>{isMac ? '⌘+G' : 'Ctrl+G'}</span>
  );
}
