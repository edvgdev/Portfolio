import { Poppins, Birthstone } from 'next/font/google';

export const poppins = Poppins({
    weight: ['200','300','400','700','800'],
    variable: '--font-poppins',
    subsets: ['latin'],
});

export const birthstone = Birthstone({
    weight: ['400'],
    variable: '--font-birthstone',
    subsets: ['latin'],
});