import { Shell, Event } from 'electron';

export const handleNavigation = (shell: Shell) => (event: Event, url: string) => {
  if (
    url.startsWith('https://accounts.townshiptale.com/') ||
    url === 'https://discord.gg/THy2AVBPHX' ||
    url === 'https://twitter.com/ubizozo'
  ) {
    event.preventDefault();
    shell.openExternal(url);
  }
};
