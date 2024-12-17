"use client";

import { ReactLenis } from 'lenis/react';

const SmoothScroll = ({ children }) => {
    return (
        <ReactLenis root options={{
            duration: 1.2,
        }}>
            { children }
        </ReactLenis>
    );
};

export default SmoothScroll;