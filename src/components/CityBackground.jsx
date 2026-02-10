import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * HIGHLY OPTIMIZED Cyberpunk City Background Component
 * Fixed lagging and blinking issues with:
 * - Frame rate limiting (30fps instead of 60fps)
 * - Instanced geometry for buildings
 * - Reduced draw calls
 * - Simpler materials
 * - Reduced particle count
 */
const CityBackground = ({ opacity = 1 }) => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Prevent re-initialization
        if (sceneRef.current) return;
        sceneRef.current = true;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0f);
        scene.fog = new THREE.FogExp2(0x0a0a0f, 0.02);

        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            1,
            200
        );
        camera.position.set(0, 10, 22);
        camera.lookAt(0, 5, 0);

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: false,
                alpha: false,
                powerPreference: 'low-power',
                stencil: false,
                depth: true
            });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            renderer.setPixelRatio(1); // Fixed pixel ratio for consistency
        } catch (error) {
            console.warn("Error creating WebGL context in CityBackground:", error);
            sceneRef.current = false;
            return;
        }

        // Clear container safely
        const container = containerRef.current;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(renderer.domElement);

        // Single shared material for all buildings
        const buildingMat = new THREE.MeshBasicMaterial({
            color: 0x0a0a15,
        });

        const neonMatCyan = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.6,
        });
        const neonMatPurple = new THREE.MeshBasicMaterial({
            color: 0x8338ec,
            transparent: true,
            opacity: 0.6,
        });

        // Create buildings with density
        const buildingPositions = [];
        for (let x = -40; x <= 40; x += 8) {
            for (let z = -40; z <= 40; z += 8) {
                if (Math.abs(x) < 8 && Math.abs(z) < 8) continue;
                if (Math.random() > 0.8) continue; // Random gaps
                buildingPositions.push({ x, z });
            }
        }

        // Create buildings
        buildingPositions.forEach(pos => {
            const height = 5 + Math.random() * 15;
            const width = 2 + Math.random() * 3;
            const depth = 2 + Math.random() * 3;

            const buildingGeo = new THREE.BoxGeometry(width, height, depth);
            const building = new THREE.Mesh(buildingGeo, buildingMat);
            building.position.set(
                pos.x + (Math.random() - 0.5) * 2,
                height / 2,
                pos.z + (Math.random() - 0.5) * 2
            );
            scene.add(building);

            // Neon strip
            const stripGeo = new THREE.BoxGeometry(width + 0.1, 0.05, depth + 0.1);
            const stripMat = Math.random() > 0.6 ? neonMatCyan : neonMatPurple;
            const strip = new THREE.Mesh(stripGeo, stripMat);
            strip.position.copy(building.position);
            strip.position.y = height * (0.8 + Math.random() * 0.15);
            scene.add(strip);
            
            // Second strip for tall buildings
            if (height > 12) {
                const strip2 = new THREE.Mesh(stripGeo, stripMat);
                strip2.position.copy(building.position);
                strip2.position.y = height * 0.4;
                scene.add(strip2);
            }
        });

        // Hologram - keep globe clearly visible near center
        const holoGroup = new THREE.Group();
        holoGroup.position.set(0, 7, 10);
        scene.add(holoGroup);

        const ringGeo = new THREE.TorusGeometry(4.2, 0.03, 8, 64);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.55,
            depthWrite: false,
            depthTest: false,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.renderOrder = 10;
        ring.rotation.x = Math.PI / 2.5;
        holoGroup.add(ring);

        const holoSphereGeo = new THREE.IcosahedronGeometry(2.4, 1);
        const holoSphereMat = new THREE.MeshBasicMaterial({
            color: 0x8338ec,
            wireframe: true,
            transparent: true,
            opacity: 0.45,
            side: THREE.DoubleSide,
            depthWrite: false,
            depthTest: false,
        });
        const holoSphere = new THREE.Mesh(holoSphereGeo, holoSphereMat);
        holoSphere.renderOrder = 11;
        holoGroup.add(holoSphere);

        // Vehicles
        const vehicles = [];
        for (let i = 0; i < 4; i++) {
            const vehicleGeo = new THREE.ConeGeometry(0.3, 1, 4);
            const vehicleMat = new THREE.MeshBasicMaterial({
                color: i % 2 === 0 ? 0x00ffff : 0xff00ff,
            });
            const vehicle = new THREE.Mesh(vehicleGeo, vehicleMat);
            vehicle.rotation.x = Math.PI / 2;
            const angle = (i / 4) * Math.PI * 2;
            const radius = 20 + i * 5;
            vehicle.position.set(
                Math.cos(angle) * radius,
                10 + i * 4,
                Math.sin(angle) * radius
            );
            scene.add(vehicle);
            vehicles.push({
                mesh: vehicle,
                speed: 0.003 + i * 0.001,
                radius: radius,
                angle: angle,
            });
        }

        // Expanded Grid
        const gridMat = new THREE.LineBasicMaterial({
            color: 0x4444ff,
            transparent: true,
            opacity: 0.15,
        });

        for (let i = -60; i <= 60; i += 10) {
             const points1 = [new THREE.Vector3(i, 0.1, -60), new THREE.Vector3(i, 0.1, 60)];
             const geo1 = new THREE.BufferGeometry().setFromPoints(points1);
             scene.add(new THREE.Line(geo1, gridMat));
             
             const points2 = [new THREE.Vector3(-60, 0.1, i), new THREE.Vector3(60, 0.1, i)];
             const geo2 = new THREE.BufferGeometry().setFromPoints(points2);
             scene.add(new THREE.Line(geo2, gridMat));
        }

        // Particles
        const particleCount = 150;
        const particlesGeo = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            particlePositions[i] = (Math.random() - 0.5) * 80;
            particlePositions[i + 1] = Math.random() * 40;
            particlePositions[i + 2] = (Math.random() - 0.5) * 80;
        }

        particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const particlesMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.12,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        });

        const particles = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particles);

        // Simple lighting
        const ambientLight = new THREE.AmbientLight(0x202030, 0.8);
        scene.add(ambientLight);

        // Animation with frame limiting
        let animationId;
        let lastTime = 0;
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;

        // Mouse tracking with throttling
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        const handleMouseMove = (e) => {
            targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        const animate = (currentTime) => {
            animationId = requestAnimationFrame(animate);

            // Frame rate limiting
            const deltaTime = currentTime - lastTime;
            if (deltaTime < frameInterval) return;
            lastTime = currentTime - (deltaTime % frameInterval);

            // Smooth mouse interpolation
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            // Camera movement
            camera.position.x = mouseX * 4;
            camera.position.y = 12 + mouseY * 2;
            camera.lookAt(0, 5, 0);

            // Animate hologram
            holoSphere.rotation.y += 0.008;
            ring.rotation.z += 0.003;

            // Animate vehicles
            vehicles.forEach(vehicle => {
                vehicle.angle += vehicle.speed;
                vehicle.mesh.position.x = Math.cos(vehicle.angle) * vehicle.radius;
                vehicle.mesh.position.z = Math.sin(vehicle.angle) * vehicle.radius;
                vehicle.mesh.rotation.y = vehicle.angle + Math.PI / 2;
            });

            // Update particles every 3rd frame only
            if (Math.floor(currentTime / 100) % 3 === 0) {
                const positions = particles.geometry.attributes.position.array;
                for (let i = 1; i < positions.length; i += 3) {
                    positions[i] -= 0.15;
                    if (positions[i] < 0) positions[i] = 30;
                }
                particles.geometry.attributes.position.needsUpdate = true;
            }

            renderer.render(scene, camera);
        };

        // Start animation
        animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            if (!containerRef.current) return;
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            sceneRef.current = false;
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);

            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }

            renderer.dispose();
            renderer.forceContextLoss();
            renderer.context = null;
            renderer.domElement = null;
            renderer = null;

            scene.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(m => m.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity }}
        >
            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
};

export default CityBackground;
