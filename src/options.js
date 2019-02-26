import { unregisterBlockType } from 'wp.blocks';

export const blocks = [
  'accordion',
  'countdown',
  'countup',
  'divider',
  'icon',
  'iconbox',
  'imagebox',
  'image-comparison',
  'justified-gallery',
  'progress-bar',
  'slideshow',
  'tabs',
  'google-maps',
];

// Deactivate blocks based on user settings (GutenBee options page)
blocks.forEach(square => {
  if (__GUTENBEE_SETTINGS__[`active_${square}`] !== '1') {
    unregisterBlockType(`gutenbee/${square}`);
  }
});

blocks.forEach(square => {
  if (__GUTENBEE_SETTINGS__[`active_${square}`] !== '1') {
    registerBlockType(`gutenbee/${square}`);
  }
});


