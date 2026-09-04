import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function StarFieldBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.z = 500;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x02050e, 1.0); // Deep black space background

    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    // 3. Generate Soft Circular Star Texture (avoids square artifacts)
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 16;
    starCanvas.height = 16;
    const starCtx = starCanvas.getContext('2d');
    if (starCtx) {
      const grad = starCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.85)');
      grad.addColorStop(0.6, 'rgba(235, 245, 255, 0.3)');
      grad.addColorStop(1, 'rgba(235, 245, 255, 0)');
      starCtx.fillStyle = grad;
      starCtx.fillRect(0, 0, 16, 16);
    }
    const starTexture = new THREE.CanvasTexture(starCanvas);

    // 4. Hundreds of Scattered Natural Stars (BufferGeometry)
    const starCount = 850;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const baseBrightness = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;

      // Natural scatter across 3D space
      positions[i3] = (Math.random() - 0.5) * 1400;
      positions[i3 + 1] = (Math.random() - 0.5) * 1000;
      positions[i3 + 2] = (Math.random() - 0.5) * 800;

      // Varying brightness: most stars dim/subtle, small percentage slightly brighter
      const rand = Math.random();
      let brightness;
      if (rand > 0.94) {
        brightness = 0.85 + Math.random() * 0.15; // 6% bright
      } else if (rand > 0.70) {
        brightness = 0.55 + Math.random() * 0.25; // 24% medium
      } else {
        brightness = 0.20 + Math.random() * 0.30; // 70% subtle/dim
      }

      baseBrightness[i] = brightness;

      // Subtle ice-white / clean scientific star color
      const tint = 0.95 + Math.random() * 0.05;
      colors[i3] = brightness * tint;
      colors[i3 + 1] = brightness * tint;
      colors[i3 + 2] = brightness * (tint + 0.05); // slight cool tint
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 3.5,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 5. Animation Loop with Subtle Twinkling & Calm Motion
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Extremely subtle, calm rotation
      starField.rotation.y = elapsedTime * 0.008;
      starField.rotation.x = elapsedTime * 0.004;

      // Subtle global twinkle effect
      starMaterial.opacity = 0.85 + Math.sin(elapsedTime * 1.2) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    window.addEventListener('resize', handleResize);

    // 7. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();

      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      starGeometry.dispose();
      starMaterial.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="starfield-background-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}

export default StarFieldBackground;
