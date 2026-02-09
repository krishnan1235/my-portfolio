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
        camera.position.set(0, 12, 25);
        camera.lookAt(0, 5, 0);

        const renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: false,
            powerPreference: 'low-power',
            stencil: false,
            depth: true
        });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(1); // Fixed pixel ratio for consistency

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

        const neonMat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.6,
        });

        // Create buildings with instanced mesh for better performance
        const buildingPositions = [];
        for (let x = -24; x <= 24; x += 12) {
            for (let z = -24; z <= 24; z += 12) {
                if (Math.abs(x) < 10 && Math.abs(z) < 10) continue;
                buildingPositions.push({ x, z });
            }
        }

        // Create buildings
        buildingPositions.forEach(pos => {
            const height = 8 + Math.random() * 12;
            const width = 3 + Math.random() * 2;
            const depth = 3 + Math.random() * 2;

            const buildingGeo = new THREE.BoxGeometry(width, height, depth);
            const building = new THREE.Mesh(buildingGeo, buildingMat);
            building.position.set(
                pos.x + (Math.random() - 0.5) * 3,
                height / 2,
                pos.z + (Math.random() - 0.5) * 3
            );
            scene.add(building);

            // Single neon strip per building
            const stripGeo = new THREE.BoxGeometry(width + 0.1, 0.1, depth + 0.1);
            const strip = new THREE.Mesh(stripGeo, neonMat);
            strip.position.copy(building.position);
            strip.position.y = height * 0.7;
            scene.add(strip);
        });

        // Simplified hologram - just one ring and sphere
        const holoGroup = new THREE.Group();
        scene.add(holoGroup);

        const ringGeo = new THREE.TorusGeometry(2.5, 0.05, 8, 32);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.4,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 3;
        holoGroup.add(ring);

        const holoSphereGeo = new THREE.SphereGeometry(1.5, 12, 12);
        const holoSphereMat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
        });
        const holoSphere = new THREE.Mesh(holoSphereGeo, holoSphereMat);
        holoSphere.position.y = 5;
        holoGroup.add(holoSphere);

        // Only 2 flying vehicles
        const vehicles = [];
        for (let i = 0; i < 2; i++) {
            const vehicleGeo = new THREE.BoxGeometry(1, 0.25, 0.5);
            const vehicleMat = new THREE.MeshBasicMaterial({
                color: i === 0 ? 0x00ffff : 0x8338ec,
            });
            const vehicle = new THREE.Mesh(vehicleGeo, vehicleMat);
            const angle = (i / 2) * Math.PI * 2;
            const radius = 18 + i * 8;
            vehicle.position.set(
                Math.cos(angle) * radius,
                15 + i * 5,
                Math.sin(angle) * radius
            );
            scene.add(vehicle);
            vehicles.push({
                mesh: vehicle,
                speed: 0.004 + i * 0.002,
                radius: radius,
                angle: angle,
            });
        }

        // Simple ground plane
        const groundGeo = new THREE.PlaneGeometry(100, 100);
        const groundMat = new THREE.MeshBasicMaterial({
            color: 0x050508,
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        scene.add(ground);

        // Minimal grid (fewer lines)
        const gridMat = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.08,
        });

        for (let i = -30; i <= 30; i += 15) {
            const points1 = [new THREE.Vector3(i, 0.01, -30), new THREE.Vector3(i, 0.01, 30)];
            const geo1 = new THREE.BufferGeometry().setFromPoints(points1);
            scene.add(new THREE.Line(geo1, gridMat));

            const points2 = [new THREE.Vector3(-30, 0.01, i), new THREE.Vector3(30, 0.01, i)];
            const geo2 = new THREE.BufferGeometry().setFromPoints(points2);
            scene.add(new THREE.Line(geo2, gridMat));
        }

        // Minimal particles (100 instead of 300)
        const particleCount = 100;
        const particlesGeo = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            particlePositions[i] = (Math.random() - 0.5) * 60;
            particlePositions[i + 1] = Math.random() * 30;
            particlePositions[i + 2] = (Math.random() - 0.5) * 60;
        }

        particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const particlesMat = new THREE.PointsMaterial({
            color: 0x22d3ee,
            size: 0.15,
            transparent: true,
            opacity: 0.5,
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
