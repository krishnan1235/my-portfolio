import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CodingBoyHero Component
 * A larger, hero-sized version of the coding boy for prominent display
 * Use this as a main hero element, not a small widget
 */
const CodingBoyHero = ({ className = '' }) => {
    const [isError, setIsError] = React.useState(false);
    const containerRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (sceneRef.current) return;
        sceneRef.current = true;
        setIsError(false);

        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0x0a0a0f); // Make sure this is transparent or removed

        const camera = new THREE.PerspectiveCamera(
            50,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 6, 18);
        camera.lookAt(0, 3, 0);

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: false,
                alpha: true,
                powerPreference: 'high-performance',
                precision: 'mediump'
            });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            renderer.setClearColor(0x000000, 0);
        } catch (e) {
            console.warn("WebGL Context Error in CodingBoyHero:", e);
            sceneRef.current = false;
            setIsError(true);
            return;
        }

        // Clear container
        while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
        }
        containerRef.current.appendChild(renderer.domElement);

        // Materials
        const skinMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffdbac,
            roughness: 0.4,
            metalness: 0.0,
        });

        const hairMaterial = new THREE.MeshStandardMaterial({
            color: 0x2a1d15,
            roughness: 0.9,
        });

        const shirtMaterial = new THREE.MeshStandardMaterial({
            color: 0x1e3a5f,
            roughness: 0.7,
        });

        const pantsMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            roughness: 0.8,
        });

        const plasticMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.2,
            metalness: 0.1,
        });

        const screenMat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.9,
        });

        const characterGroup = new THREE.Group();
        scene.add(characterGroup);

        // Head
        const headGeo = new THREE.SphereGeometry(0.75, 32, 32);
        const head = new THREE.Mesh(headGeo, skinMaterial);
        head.position.set(0, 5, -0.5);
        head.scale.set(0.85, 1, 0.9);
        characterGroup.add(head);

        // Hair
        const hairGeo = new THREE.SphereGeometry(0.78, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
        const hair = new THREE.Mesh(hairGeo, hairMaterial);
        hair.position.set(0, 5.1, -0.5);
        hair.scale.set(0.9, 0.7, 0.95);
        characterGroup.add(hair);

        // Headphones
        const headphoneBandGeo = new THREE.TorusGeometry(0.8, 0.1, 16, 32, Math.PI);
        const headphoneBand = new THREE.Mesh(headphoneBandGeo, plasticMat);
        headphoneBand.position.set(0, 5.2, -0.5);
        headphoneBand.rotation.z = Math.PI / 2;
        characterGroup.add(headphoneBand);

        const earCupGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.18, 32);
        const earCupLeft = new THREE.Mesh(earCupGeo, plasticMat);
        earCupLeft.rotation.z = Math.PI / 2;
        earCupLeft.position.set(-0.82, 5, -0.5);
        characterGroup.add(earCupLeft);

        const earCupRight = new THREE.Mesh(earCupGeo, plasticMat);
        earCupRight.rotation.z = Math.PI / 2;
        earCupRight.position.set(0.82, 5, -0.5);
        characterGroup.add(earCupRight);

        // Torso
        const torsoGeo = new THREE.CylinderGeometry(0.7, 1, 2.2, 32);
        const torso = new THREE.Mesh(torsoGeo, shirtMaterial);
        torso.position.set(0, 3, -0.5);
        torso.scale.set(1, 1, 0.55);
        characterGroup.add(torso);

        // Arms
        const armGeo = new THREE.CylinderGeometry(0.25, 0.22, 1.6, 32);

        const leftArmGroup = new THREE.Group();
        leftArmGroup.position.set(-0.95, 4, -0.5);
        const leftArm = new THREE.Mesh(armGeo, shirtMaterial);
        leftArm.position.y = -0.7;
        leftArmGroup.add(leftArm);
        leftArmGroup.rotation.z = 0.35;
        leftArmGroup.rotation.x = 0.6;
        characterGroup.add(leftArmGroup);

        const rightArmGroup = new THREE.Group();
        rightArmGroup.position.set(0.95, 4, -0.5);
        const rightArm = new THREE.Mesh(armGeo, shirtMaterial);
        rightArm.position.y = -0.7;
        rightArmGroup.add(rightArm);
        rightArmGroup.rotation.z = -0.35;
        rightArmGroup.rotation.x = 0.6;
        characterGroup.add(rightArmGroup);

        // Forearms
        const forearmGeo = new THREE.CylinderGeometry(0.2, 0.17, 1.4, 32);
        const leftForearm = new THREE.Mesh(forearmGeo, skinMaterial);
        leftForearm.position.set(0, -1.4, 0.5);
        leftForearm.rotation.x = -1.3;
        leftArmGroup.add(leftForearm);

        const rightForearm = new THREE.Mesh(forearmGeo, skinMaterial);
        rightForearm.position.set(0, -1.4, 0.5);
        rightForearm.rotation.x = -1.3;
        rightArmGroup.add(rightForearm);

        // Desk Group
        const deskGroup = new THREE.Group();
        scene.add(deskGroup);

        // Desk surface
        const deskTopGeo = new THREE.BoxGeometry(8, 0.2, 4);
        const deskMat = new THREE.MeshStandardMaterial({
            color: 0x2a2a2a,
            roughness: 0.3,
            metalness: 0.1
        });
        const deskTop = new THREE.Mesh(deskTopGeo, deskMat);
        deskTop.position.set(0, 1.5, 1);
        deskGroup.add(deskTop);

        // Desk legs
        const legGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.5);
        const legPositions = [[-3.5, 0.75, -0.5], [3.5, 0.75, -0.5], [-3.5, 0.75, 2.5], [3.5, 0.75, 2.5]];
        legPositions.forEach(pos => {
            const leg = new THREE.Mesh(legGeo, plasticMat);
            leg.position.set(...pos);
            deskGroup.add(leg);
        });

        // Monitor
        const monitorGroup = new THREE.Group();
        monitorGroup.position.set(0, 3.2, 0);
        deskGroup.add(monitorGroup);

        // Monitor stand
        const standGeo = new THREE.CylinderGeometry(0.12, 0.18, 1.4);
        const stand = new THREE.Mesh(standGeo, plasticMat);
        stand.position.y = -0.7;
        monitorGroup.add(stand);

        // Monitor frame
        const frameGeo = new THREE.BoxGeometry(5, 2.8, 0.15);
        const frame = new THREE.Mesh(frameGeo, plasticMat);
        monitorGroup.add(frame);

        // Screen
        const screenGeo = new THREE.PlaneGeometry(4.6, 2.5);
        const screen = new THREE.Mesh(screenGeo, screenMat);
        screen.position.z = 0.08;
        monitorGroup.add(screen);

        // Keyboard
        const keyboardGeo = new THREE.BoxGeometry(2, 0.1, 0.8);
        const keyboard = new THREE.Mesh(keyboardGeo, plasticMat);
        keyboard.position.set(0, 1.65, 2);
        deskGroup.add(keyboard);

        // Coffee mug
        const mugGeo = new THREE.CylinderGeometry(0.15, 0.12, 0.35, 16);
        const mugMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
        const mug = new THREE.Mesh(mugGeo, mugMat);
        mug.position.set(2.5, 1.75, 1.5);
        deskGroup.add(mug);

        // Chair (simplified)
        const chairSeat = new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 0.15, 1.2),
            new THREE.MeshStandardMaterial({ color: 0x333344 })
        );
        chairSeat.position.set(0, 1.8, -1.5);
        scene.add(chairSeat);

        // Lighting - Enhanced for clear visibility
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
        scene.add(ambientLight);

        // Bright screen glow light (cyan)
        const screenLight = new THREE.PointLight(0x00ffff, 2.5, 12);
        screenLight.position.set(0, 3.5, 2.5);
        scene.add(screenLight);

        // Key light - warm white from front-above for face/body visibility
        const keyLight = new THREE.DirectionalLight(0xfff5e6, 1.5);
        keyLight.position.set(2, 10, 8);
        keyLight.target.position.set(0, 4, -0.5);
        scene.add(keyLight);
        scene.add(keyLight.target);

        // Rim backlight - white from behind for silhouette edge
        const rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
        rimLight.position.set(0, 8, -8);
        scene.add(rimLight);

        // Cyan side fill from the left
        const cyanFill = new THREE.PointLight(0x22d3ee, 1.0, 15);
        cyanFill.position.set(-5, 6, 3);
        scene.add(cyanFill);

        // Purple accent fill from the right
        const fillLight = new THREE.DirectionalLight(0x8800ff, 0.5);
        fillLight.position.set(5, 5, 5);
        scene.add(fillLight);

        // Animation loop
        let frameNum = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            frameNum += 0.02;

            // Subtle typing animation
            leftArmGroup.rotation.x = 0.6 + Math.sin(frameNum * 8) * 0.04;
            rightArmGroup.rotation.x = 0.6 + Math.cos(frameNum * 8) * 0.04;

            // Subtle breathing
            characterGroup.position.y = Math.sin(frameNum * 1.5) * 0.03;

            // Screen flicker
            if (screen.material) {
                screen.material.opacity = 0.85 + Math.sin(frameNum * 20) * 0.05;
            }

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (!containerRef.current) return;
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            sceneRef.current = false;
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }
            if (renderer) {
                renderer.dispose();
                renderer.forceContextLoss();
                renderer.domElement = null;
                renderer = null;
            }
        };
    }, []);

    // if (isError) {
    //     return (
    //         <div className={`w-full h-full ${className} flex items-center justify-center bg-black/50 rounded-xl border border-cyan-500/30`}>
    //             <div className="text-center p-4">
    //                 <div className="text-4xl mb-2">👾</div>
    //                 <div className="text-cyan-400 font-mono text-sm">3D AVATAR OFFLINE</div>
    //                 <div className="text-cyan-500/50 text-xs mt-1">Please Refresh Browser</div>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className={`w-full h-full ${className}`}>
            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
};

export default CodingBoyHero;
