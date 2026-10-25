// source: https://codepen.io/IbeVanmeenen/pen/vZzgvg
const noise = () => {
  let canvas, ctx;
  let wWidth, wHeight;
  let noiseData = [];
  let frame = 0;
  let loopTimeout;
  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;
    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000;
      }
    }
    noiseData.push(idata);
  };
  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame++;
    }
    ctx.putImageData(noiseData[frame], 0, 0);
  };
  // Loop
  const loop = () => {
    paintNoise(frame);
    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, (1000 / 25));
  };
  // Respects the user's "reduce motion" setting: draws a single still frame
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Setup
  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;
    noiseData = [];
    frame = 0;
    for (let i = 0; i < 10; i++) {
      createNoise();
    }
    if (reducedMotion.matches) {
      ctx.putImageData(noiseData[0], 0, 0);
      return;
    }
    loop();
  };
  // Reset
  let resizeThrottle;
  const reset = () => {
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeThrottle);
      resizeThrottle = window.setTimeout(() => {
        window.clearTimeout(loopTimeout);
        setup();
      }, 200);
    }, false);
    reducedMotion.addEventListener('change', () => {
      window.clearTimeout(loopTimeout);
      setup();
    });
  };
  // Init
  const init = (() => {
    canvas = document.getElementById('noise');
    ctx = canvas.getContext('2d');
    setup();
    reset();
  })();
};

noise();
