import React from 'react';

export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Background radial gradient mask for absolute depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,11,22,0.3)_0%,#030712_80%)]" />

      {/* Grid overlay with abstract subtle opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-primary/20 filter blur-[100px] animate-float-slow-1 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-secondary/15 filter blur-[120px] animate-float-slow-2 pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-pink-500/10 filter blur-[110px] animate-float-slow-3 pointer-events-none" />
    </div>
  );
}
