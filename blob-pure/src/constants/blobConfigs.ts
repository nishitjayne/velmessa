export interface BlobConfig {
  id: string;
  layer: number;
  basePosition: { x: number; y: number }; // Percentage for responsive anchoring
  pixelPosition?: { top?: number; right?: number; left?: number; bottom?: number }; // Specific pixel anchors
  baseSize: { w: number; h: number };
  colors: string[];
  restingShape: string;
  blur: number;
  blendMode: string;
}

export const HERO_BLOBS: BlobConfig[] = [
  {
    id: 'blob-c', // Top-left irregular
    layer: -5,
    pixelPosition: { top: -40, left: -50 },
    baseSize: { w: 250, h: 200 },
    colors: ['#FEFB41', '#3430FF'],
    restingShape: '60% 54% 75% 40% / 52% 76% 38% 72%',
    blur: 30,
    blendMode: 'screen'
  },
  {
    id: 'blob-b', // Bottom-center of V
    layer: -4,
    pixelPosition: { top: 260, right: 160 },
    baseSize: { w: 200, h: 200 },
    colors: ['#90E8F8', '#3430FF', '#6A41FA'],
    restingShape: '50% 50% 50% 50% / 50% 50% 50% 50%',
    blur: 20,
    blendMode: 'screen'
  },
  {
    id: 'blob-a', // Top-right small
    layer: -3,
    pixelPosition: { top: 40, right: 120 },
    baseSize: { w: 100, h: 100 },
    colors: ['#FEFB41', '#90E8F8', '#3430FF'],
    restingShape: '50% 50% 50% 50% / 50% 50% 50% 50%',
    blur: 10,
    blendMode: 'screen'
  }
];
