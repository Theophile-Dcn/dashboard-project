import { Finger_Paint, Honk, Roboto } from 'next/font/google';

export const honk = Honk({
  subsets: ['latin'],
  weight: '400'
});

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const fingerPaint = Finger_Paint({
  weight: '400',
  subsets: ['latin']
});
