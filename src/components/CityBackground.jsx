import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Matte Sphere Background with inner glowing sphere
 * - Solid matte outer sphere with colorful multi-light setup
 * - Small glowing inner sphere visible through slight transparency
 * - Clean orbital rings
 * - Subtle particles
 */
const CityBackground = ({ opacity = 1 }) => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (sceneRef.current) return;
        sceneRef.current = true;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050508);

        const camera = new THREE.PerspectiveCamera(
            60,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            200
        );
        camera.position.set(0, 2, 16);
        camera.lookAt(0, 1, 0);

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: false,
                powerPreference: 'low-power',
            });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.55;
        } catch (error) {
            console.warn("Error creating WebGL context:", error);
            sceneRef.current = false;
            return;
        }

        const container = containerRef.current;
        while (container.firstChild) container.removeChild(container.firstChild);
        container.appendChild(renderer.domElement);

        // ===== OUTER SPHERE — Matte finish, semi-transparent =====
        const sphereGeo = new THREE.SphereGeometry(3.5, 64, 64);
        const sphereMat = new THREE.MeshPhysicalMaterial({
            color: 0x22d3ee,
            roughness: 0.22,
            metalness: 0.4,
            clearcoat: 0.7,
            clearcoatRoughness: 0.12,
            iridescence: 1.0,
            iridescenceIOR: 1.3,
            iridescenceThicknessRange: [140, 420],
            transparent: true,
            opacity: 0.9,
            envMapIntensity: 1.15,
            emissive: 0xec4899,
            emissiveIntensity: 2.25,
        });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        sphere.position.set(0, 2, 0);
        scene.add(sphere);

        // Atmospheric color shell to intensify the sphere color
        const atmosGeo = new THREE.SphereGeometry(3.72, 64, 64);
        const atmosMat = new THREE.MeshBasicMaterial({
            color: 0x22d3ee,
            transparent: true,
            opacity: 0.08,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const atmosSphere = new THREE.Mesh(atmosGeo, atmosMat);
        atmosSphere.position.copy(sphere.position);
        scene.add(atmosSphere);

        // Visible rotation overlay (wireframe glow)
        const wireGeo = new THREE.SphereGeometry(3.52, 28, 22);
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0x7dd3fc,
            wireframe: true,
            transparent: true,
            opacity: 0.22,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const wireSphere = new THREE.Mesh(wireGeo, wireMat);
        wireSphere.position.copy(sphere.position);
        scene.add(wireSphere);

        // ===== INNER SMALL SPHERE — Glowing core =====
        const innerGeo = new THREE.SphereGeometry(1.2, 32, 32);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0x22d3ee,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const innerSphere = new THREE.Mesh(innerGeo, innerMat);
        innerSphere.position.copy(sphere.position);
        scene.add(innerSphere);

        // Small inner sphere (extra) — bright and animated
        const miniGeo = new THREE.SphereGeometry(0.28, 20, 20);
        const miniMat = new THREE.MeshBasicMaterial({
            color: 0xa855f7,
            transparent: true,
            opacity: 0.95,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const miniSphere = new THREE.Mesh(miniGeo, miniMat);
        miniSphere.position.copy(sphere.position);
        miniSphere.position.x += 0.75;
        miniSphere.position.z += 0.25;
        scene.add(miniSphere);

        // Inner sphere glow halo
        const haloGeo = new THREE.SphereGeometry(1.6, 32, 32);
        const haloMat = new THREE.MeshBasicMaterial({
            color: 0x22d3ee,
            transparent: true,
            opacity: 0.24,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const halo = new THREE.Mesh(haloGeo, haloMat);
        halo.position.copy(sphere.position);
        scene.add(halo);

        // ===== EDGE HIGHLIGHT on outer sphere =====
        const edgeGeo = new THREE.SphereGeometry(3.58, 64, 64);
        const edgeMat = new THREE.MeshBasicMaterial({
            color: 0x8338ec,
            transparent: true,
            opacity: 0.18,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const edgeSphere = new THREE.Mesh(edgeGeo, edgeMat);
        edgeSphere.position.copy(sphere.position);
        scene.add(edgeSphere);

        const edgeGeo2 = new THREE.SphereGeometry(3.62, 64, 64);
        const edgeMat2 = new THREE.MeshBasicMaterial({
            color: 0x22d3ee,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const edgeSphere2 = new THREE.Mesh(edgeGeo2, edgeMat2);
        edgeSphere2.position.copy(sphere.position);
        scene.add(edgeSphere2);

        // ===== ORBITAL RINGS =====
        // Ring 1 — Cyan
        const ring1 = new THREE.Mesh(
            new THREE.TorusGeometry(4.8, 0.055, 16, 120),
            new THREE.MeshBasicMaterial({
                color: 0x22d3ee,
                transparent: true,
                opacity: 0.75,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            })
        );
        ring1.position.copy(sphere.position);
        ring1.rotation.x = Math.PI / 2.2;
        scene.add(ring1);

        // Ring 2 — Purple
        const ring2 = new THREE.Mesh(
            new THREE.TorusGeometry(5.3, 0.045, 16, 120),
            new THREE.MeshBasicMaterial({
                color: 0xa855f7,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            })
        );
        ring2.position.copy(sphere.position);
        ring2.rotation.x = Math.PI / 3;
        ring2.rotation.y = Math.PI / 5;
        scene.add(ring2);

        const ring1BaseRotation = ring1.rotation.clone();
        const ring2BaseRotation = ring2.rotation.clone();

        // ===== GRID FLOOR =====
        const gridMat = new THREE.LineBasicMaterial({
            color: 0x222244,
            transparent: true,
            opacity: 0.08,
        });
        for (let i = -50; i <= 50; i += 10) {
            scene.add(new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i, -2, -50), new THREE.Vector3(i, -2, 50)]),
                gridMat
            ));
            scene.add(new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-50, -2, i), new THREE.Vector3(50, -2, i)]),
                gridMat
            ));
        }

        // ===== PARTICLES =====
        const isMobile = containerRef.current.clientWidth < 768;
        const pCount = isMobile ? 40 : 80;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount * 3; i += 3) {
            pPos[i] = (Math.random() - 0.5) * 60;
            pPos[i + 1] = Math.random() * 25 - 3;
            pPos[i + 2] = (Math.random() - 0.5) * 60;
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({
            color: 0x8899bb,
            size: 0.1,
            transparent: true,
            opacity: 0.45,
            sizeAttenuation: true,
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        // ===== STARS (brighter, denser than particles) =====
        const starCount = isMobile ? 260 : 620;
        const starGeo = new THREE.BufferGeometry();
        const starPos = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i += 3) {
            const r = 35 + Math.random() * 55;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            starPos[i] = r * Math.sin(phi) * Math.cos(theta);
            starPos[i + 1] = (r * Math.cos(phi)) * 0.55 + 2;
            starPos[i + 2] = r * Math.sin(phi) * Math.sin(theta);
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({
            color: 0xf8fafc,
            size: 0.22,
            transparent: true,
            opacity: 0.88,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            sizeAttenuation: true,
        });
        const stars = new THREE.Points(starGeo, starMat);
        scene.add(stars);

        // ===== LIGHTING — Multiple colorful lights =====

        // Ambient — gentle base
        const ambient = new THREE.AmbientLight(0x334466, 0.6);
        scene.add(ambient);

        // KEY LIGHT — Cyan, from front-right
        const keyLight = new THREE.DirectionalLight(0x22d3ee, 1.5);
        keyLight.position.set(6, 6, 10);
        keyLight.target = sphere;
        scene.add(keyLight);

        // RIM LIGHT — Purple, from behind-left
        const rimLight = new THREE.DirectionalLight(0x8338ec, 1.2);
        rimLight.position.set(-5, 4, -8);
        rimLight.target = sphere;
        scene.add(rimLight);

        // FILL LIGHT — Pink, from below-right
        const fillLight = new THREE.DirectionalLight(0xec4899, 0.6);
        fillLight.position.set(4, -3, 5);
        fillLight.target = sphere;
        scene.add(fillLight);

        // TOP LIGHT — Blue-white, from above
        const topLight = new THREE.DirectionalLight(0xaaccff, 0.8);
        topLight.position.set(0, 12, 2);
        topLight.target = sphere;
        scene.add(topLight);

        // INNER GLOW LIGHT — Cyan point light at the inner sphere
        const innerGlow = new THREE.PointLight(0x22d3ee, 3.3, 14);
        innerGlow.position.copy(sphere.position);
        scene.add(innerGlow);

        // SECONDARY GLOW — Purple point light near sphere
        const purpleGlow = new THREE.PointLight(0xa855f7, 1.6, 16);
        purpleGlow.position.set(-3, 3, 3);
        scene.add(purpleGlow);

        // Extra colored glow to make the sphere visible on black backgrounds
        const magentaGlow = new THREE.PointLight(0xec4899, 1.15, 14);
        magentaGlow.position.set(3.5, 4.5, 5.5);
        scene.add(magentaGlow);

        const amberGlow = new THREE.PointLight(0xf59e0b, 0.95, 14);
        amberGlow.position.set(-4.5, 1.0, 6.0);
        scene.add(amberGlow);

        // ===== ANIMATION =====
        let animationId;
        let lastTime = 0;
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;

        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;

        const handleMouseMove = (e) => {
            targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        const animate = (currentTime) => {
            animationId = requestAnimationFrame(animate);
            const dt = currentTime - lastTime;
            if (dt < frameInterval) return;
            lastTime = currentTime - (dt % frameInterval);

            const t = currentTime * 0.001;

            // Smooth mouse follow
            mouseX += (targetMouseX - mouseX) * 0.03;
            mouseY += (targetMouseY - mouseY) * 0.03;

            // Camera subtle movement
            camera.position.x = mouseX * 2;
            camera.position.y = 3 + mouseY * 1.5;
            camera.lookAt(0, 1.5, 0);

            // Unified slow rotation (sphere + rings together)
            sphere.rotation.y += 0.003;
            sphere.rotation.x += 0.0011;
            sphere.rotation.z += 0.0008;
            edgeSphere.rotation.copy(sphere.rotation);
            edgeSphere2.rotation.copy(sphere.rotation);
            wireSphere.rotation.copy(sphere.rotation);
            atmosSphere.rotation.copy(sphere.rotation);

            // Rings follow sphere rotation (no runaway accumulation)
            ring1.rotation.set(
                ring1BaseRotation.x + sphere.rotation.x,
                ring1BaseRotation.y + sphere.rotation.y,
                ring1BaseRotation.z + sphere.rotation.z + Math.sin(t * 0.6) * 0.01
            );
            ring2.rotation.set(
                ring2BaseRotation.x + sphere.rotation.x,
                ring2BaseRotation.y + sphere.rotation.y,
                ring2BaseRotation.z + sphere.rotation.z - Math.sin(t * 0.55) * 0.012
            );

            // Inner sphere: counter-rotate + pulse
            innerSphere.rotation.y -= 0.008;
            innerSphere.rotation.x += 0.005;
            const innerPulse = 1 + Math.sin(t * 1.5) * 0.1;
            innerSphere.scale.setScalar(innerPulse);
            halo.scale.setScalar(innerPulse * 1.1);

            // Inner sphere color cycling (cyan <-> purple)
            const colorPhase = (Math.sin(t * 0.5) + 1) / 2; // 0 to 1
            innerMat.color.setRGB(
                0.13 + colorPhase * 0.38,  // R: cyan 0.13 -> purple 0.51
                0.83 - colorPhase * 0.5,    // G: cyan 0.83 -> purple 0.33
                0.93 - colorPhase * 0.0     // B: stays high
            );
            innerGlow.color.copy(innerMat.color);
            innerGlow.intensity = 2.6 + Math.sin(t * 1.2) * 0.9;

            // Halo opacity breathing
            haloMat.opacity = 0.18 + Math.sin(t * 1.5) * 0.12;

            // Small inner sphere orbit (extra)
            miniSphere.position.x = sphere.position.x + Math.cos(t * 1.8) * 1.05;
            miniSphere.position.z = sphere.position.z + Math.sin(t * 1.8) * 0.65;
            miniSphere.position.y = sphere.position.y + Math.sin(t * 2.2) * 0.35;

            // Particles drift
            if (Math.floor(currentTime / 120) % 3 === 0) {
                const pos = particles.geometry.attributes.position.array;
                for (let i = 1; i < pos.length; i += 3) {
                    pos[i] -= 0.06;
                    if (pos[i] < -3) pos[i] = 22;
                }
                particles.geometry.attributes.position.needsUpdate = true;
            }

            // Stars slow drift + subtle twinkle
            stars.rotation.y += 0.0002;
            starMat.opacity = 0.78 + Math.sin(t * 0.8) * 0.12;

            renderer.render(scene, camera);
        };

        animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            if (!containerRef.current) return;
            const w = containerRef.current.clientWidth;
            const h = containerRef.current.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

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
            scene.traverse((obj) => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) {
                    if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
                    else obj.material.dispose();
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
