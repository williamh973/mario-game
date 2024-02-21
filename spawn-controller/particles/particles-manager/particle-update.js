import { allParticleList } from "./particle-list.js";

export function updateParticles() {
    for (let i = 0; i < allParticleList.length; i++) {
        const particleList = allParticleList[i];
    
        for (let j = 0; j < particleList.length; j++) {
            const particle = particleList[j];

                if (particle.opacity <= 0) {
                    particleList.splice(j, 1);
                } else {
                    particle.update()
                }
        }
    };
}