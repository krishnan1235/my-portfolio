import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CodingBoyWidget = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        // Scene is transparent, renderer.alpha: true

        const camera = new THREE.PerspectiveCamera(
            45,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 4.5, 11);
        camera.lookAt(0, 2.5, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputColorSpace = THREE.SRGBColorSpace;

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
            color: 0x34495e,
            roughness: 0.9,
        });

        const plasticMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.2,
            metalness: 0.1,
        });

        const characterGroup = new THREE.Group();
        scene.add(characterGroup);

        // Head
        const headGeo = new THREE.SphereGeometry(0.65, 32, 32);
        const head = new THREE.Mesh(headGeo, skinMaterial);
        head.position.set(0, 4, -0.5);
        head.scale.set(0.9, 1, 0.95);
        characterGroup.add(head);

        // Headphones
        const headphoneBandGeo = new THREE.TorusGeometry(0.7, 0.08, 16, 32, Math.PI);
        const headphoneBand = new THREE.Mesh(headphoneBandGeo, plasticMat);
        headphoneBand.position.set(0, 4.1, -0.5);
        headphoneBand.rotation.z = Math.PI / 2;
        characterGroup.add(headphoneBand);

        const earCupGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.15, 32);
        const earCupLeft = new THREE.Mesh(earCupGeo, plasticMat);
        earCupLeft.rotation.z = Math.PI / 2;
        earCupLeft.position.set(-0.72, 4, -0.5);
        characterGroup.add(earCupLeft);

        const earCupRight = new THREE.Mesh(earCupGeo, plasticMat);
        earCupRight.rotation.z = Math.PI / 2;
        earCupRight.position.set(0.72, 4, -0.5);
        characterGroup.add(earCupRight);

        // Torso
        const torsoGeo = new THREE.CylinderGeometry(0.6, 0.9, 1.8, 32);
        const torso = new THREE.Mesh(torsoGeo, shirtMaterial);
        torso.position.set(0, 2.4, -0.5);
        torso.scale.set(1, 1, 0.6);
        characterGroup.add(torso);

        // Arms
        const armGeo = new THREE.CylinderGeometry(0.22, 0.2, 1.4, 32);

        const leftArmGroup = new THREE.Group();
        leftArmGroup.position.set(-0.8, 3.2, -0.5);
        const leftArm = new THREE.Mesh(armGeo, shirtMaterial);
        leftArm.position.y = -0.6;
        leftArmGroup.add(leftArm);
        leftArmGroup.rotation.z = 0.3;
        leftArmGroup.rotation.x = 0.5;
        characterGroup.add(leftArmGroup);

        const rightArmGroup = new THREE.Group();
        rightArmGroup.position.set(0.8, 3.2, -0.5);
        const rightArm = new THREE.Mesh(armGeo, shirtMaterial);
        rightArm.position.y = -0.6;
        rightArmGroup.add(rightArm);
        rightArmGroup.rotation.z = -0.3;
        rightArmGroup.rotation.x = 0.5;
        characterGroup.add(rightArmGroup);

        const forearmGeo = new THREE.CylinderGeometry(0.18, 0.15, 1.2, 32);
        const leftForearm = new THREE.Mesh(forearmGeo, shirtMaterial);
        leftForearm.position.set(0, -1.2, 0.4);
        leftForearm.rotation.x = -1.2;
        leftArmGroup.add(leftForearm);

        const rightForearm = new THREE.Mesh(forearmGeo, shirtMaterial);
        rightForearm.position.set(0, -1.2, 0.4);
        rightForearm.rotation.x = -1.2;
        rightArmGroup.add(rightForearm);

        // Desk and Laptop/Desktop
        const deskGroup = new THREE.Group();
        scene.add(deskGroup);

        const deskTopGeo = new THREE.BoxGeometry(7, 0.15, 3.5);
        const deskMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.2 });
        const deskTop = new THREE.Mesh(deskTopGeo, deskMat);
        deskTop.position.set(0, 1.2, 0.8);
        deskGroup.add(deskTop);

        // Monitor (Simulating desktop)
        const monitorGroup = new THREE.Group();
        monitorGroup.position.set(0, 2.5, -0.2);
        deskGroup.add(monitorGroup);

        const standGeo = new THREE.CylinderGeometry(0.1, 0.15, 1.2);
        const stand = new THREE.Mesh(standGeo, plasticMat);
        stand.position.y = -0.6;
        monitorGroup.add(stand);

        const frameGeo = new THREE.BoxGeometry(4.5, 2.2, 0.1);
        const frame = new THREE.Mesh(frameGeo, plasticMat);
        monitorGroup.add(frame);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const screenLight = new THREE.PointLight(0x4a9eff, 1, 5);
        screenLight.position.set(0, 2.5, 1);
        scene.add(screenLight);

        const rimLight = new THREE.DirectionalLight(0xffffff, 1);
        rimLight.position.set(5, 5, -5);
        scene.add(rimLight);

        // Animation loop
        let frameNum = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            frameNum += 0.03;

            leftArmGroup.rotation.x = 0.5 + Math.sin(frameNum * 10) * 0.05;
            rightArmGroup.rotation.x = 0.5 + Math.cos(frameNum * 10) * 0.05;
            characterGroup.rotation.x = Math.sin(frameNum * 2) * 0.05;
            characterGroup.position.y = Math.sin(frameNum * 2) * 0.02;

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
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-[450px] h-[350px] pointer-events-none z-50">
            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
};

export default CodingBoyWidget;
