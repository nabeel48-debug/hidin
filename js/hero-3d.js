/**
 * HIDIN 3D - Interactive 3D Hero Canvas
 * Renders a futuristic 3D printed geometric artifact with simulated layer lines,
 * laser scan ring, and interactive particle field using Three.js.
 */

(function () {
  const container = document.getElementById('hero-3d-canvas-container');
  if (!container) return;

  // Check if WebGL is supported
  if (!window.WebGLRenderingContext) {
    console.warn('WebGL not supported, skipping 3D hero canvas.');
    return;
  }

  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 2.5, 6.5);
  camera.lookAt(0, 0, 0);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  // Electric Cyan light from left
  const cyanLight = new THREE.PointLight(0x06b6d4, 3, 20);
  cyanLight.position.set(-4, 3, 3);
  scene.add(cyanLight);

  // Electric Purple light from right
  const purpleLight = new THREE.PointLight(0x8b5cf6, 3.5, 20);
  purpleLight.position.set(4, 2, 2);
  scene.add(purpleLight);

  // Subtle top rim light
  const topLight = new THREE.DirectionalLight(0xffffff, 1.2);
  topLight.position.set(0, 6, 2);
  scene.add(topLight);

  // Create Master 3D Group
  const modelGroup = new THREE.Group();
  scene.add(modelGroup);

  // 1. Build Plate Holographic Grid
  const gridHelper = new THREE.GridHelper(5, 20, 0x8b5cf6, 0x1e2235);
  gridHelper.position.y = -1.4;
  scene.add(gridHelper);

  // Circular glow ring under object
  const ringGeo = new THREE.RingGeometry(1.6, 1.68, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.6
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 2;
  ringMesh.position.y = -1.39;
  scene.add(ringMesh);

  // 2. Main 3D Printed Geometric Artifact (Icosahedron + Wireframe Layer Lines)
  // Outer faceted crystal
  const coreGeo = new THREE.IcosahedronGeometry(1.4, 0);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x0f111a,
    metalness: 0.85,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    reflectivity: 0.9,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  modelGroup.add(coreMesh);

  // Layer Lines / Wireframe Cage (Simulating 3D Print Toolpaths)
  const wireGeo = new THREE.IcosahedronGeometry(1.42, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  modelGroup.add(wireMesh);

  // Inner floating energy nucleus (Purple glowing core)
  const nucleusGeo = new THREE.OctahedronGeometry(0.7, 0);
  const nucleusMat = new THREE.MeshStandardMaterial({
    color: 0xa855f7,
    emissive: 0x7c3aed,
    emissiveIntensity: 0.8,
    roughness: 0.2,
    metalness: 0.5
  });
  const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
  modelGroup.add(nucleusMesh);

  // 3. Laser Scanner Ring (Simulating 3D printing scan/fabrication)
  const scanRingGeo = new THREE.TorusGeometry(1.7, 0.02, 16, 100);
  const scanRingMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.7
  });
  const scanRing = new THREE.Mesh(scanRingGeo, scanRingMat);
  scanRing.rotation.x = Math.PI / 2;
  modelGroup.add(scanRing);

  // 4. Floating Particles (Filament micro-dust sparks)
  const particleCount = 180;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  const colPurple = new THREE.Color(0xa855f7);
  const colCyan = new THREE.Color(0x06b6d4);

  for (let i = 0; i < particleCount; i++) {
    const radius = 2.2 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.5) * Math.PI;

    particlePositions[i * 3] = radius * Math.cos(phi) * Math.sin(theta);
    particlePositions[i * 3 + 1] = radius * Math.sin(phi);
    particlePositions[i * 3 + 2] = radius * Math.cos(phi) * Math.cos(theta);

    const mix = Math.random();
    const c = colPurple.clone().lerp(colCyan, mix);
    particleColors[i * 3] = c.r;
    particleColors[i * 3 + 1] = c.g;
    particleColors[i * 3 + 2] = c.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Interactive Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  function onPointerMove(e) {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    mouseX = (clientX - windowHalfX) * 0.0008;
    mouseY = (clientY - windowHalfY) * 0.0008;
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });

  // Handle Resize
  function onWindowResize() {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  window.addEventListener('resize', onWindowResize);

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Smooth camera mouse follow
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;
    camera.position.x = targetX * 3;
    camera.position.y = 2.5 - targetY * 2;
    camera.lookAt(0, 0, 0);

    // Rotate main 3D crystal
    modelGroup.rotation.y = elapsedTime * 0.35;
    modelGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.15;

    // Counter rotate nucleus
    nucleusMesh.rotation.y = -elapsedTime * 0.7;
    nucleusMesh.rotation.z = Math.cos(elapsedTime * 0.5) * 0.3;

    // Laser scan ring vertical oscillation (layer-by-layer printing simulation)
    const scanY = Math.sin(elapsedTime * 1.8) * 1.3;
    scanRing.position.y = scanY;
    const scaleFactor = 1 + (1.3 - Math.abs(scanY)) * 0.25;
    scanRing.scale.set(scaleFactor, scaleFactor, 1);

    // Pulse lights
    cyanLight.intensity = 2.5 + Math.sin(elapsedTime * 2.5) * 0.8;
    purpleLight.intensity = 3.0 + Math.cos(elapsedTime * 2.0) * 0.8;

    // Slowly rotate particle field
    particles.rotation.y = elapsedTime * 0.06;
    particles.rotation.x = elapsedTime * 0.02;

    renderer.render(scene, camera);
  }

  animate();
})();
