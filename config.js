// Configuration for Orbital Sound Loops app

const CONFIG = {
    // Planet settings
    planets: {
        count: 4,              // Number of planets
        minRadius: 20,         // Minimum planet radius
        maxRadius: 35,         // Maximum planet radius
        //fixedRadius: 45,       // Set to a number to use a fixed size for all planets (comment out to use random sizes)
        massFactor: 3,         // mass = radius * massFactor
        colors: ['#e8daef', '#8e44ad', '#8e44ad', '#4a235a'],  // Array of planet colors
        showLabels: false,      // Toggle to show or hide planet labels
        colorGradient: {        // Gradient for planet colors
            minColor: '#8B0000', // Dark red
            maxColor: '#FFA500'  // Bright orange
        },

        // Vortex settings
        vortex: {
            minScale: 0.01,     // Minimum vortex strength
            maxScale: 0.1,     // Maximum vortex strength
            lineColor: '#FFFFFF', // Color of the vortex indicator line
            lineWidth: 1,      // Width of the vortex indicator line
            lineDash: [5, 5],  // Dotted line pattern [dash length, gap length]
            rotationSpeedFactor: 0.5 // Speed multiplier for the spinning line
        }
    },
    
    // Particle settings
    particles: {
        count: 1000,           // Base number of particles
        useScreenSizeScaling: true,  // Scale particle count based on screen size
        densityFactor: 1000,   // Used if useScreenSizeScaling is true: particles = width * height / densityFactor
        startInCenter: false,   // true = start in center, false = random placement
        minRadius: 0.5,        // Minimum particle radius
        maxRadius: 2,          // Maximum particle radius
        massFactor: 0.1,       // mass = radius * massFactor
        baseColor: '#0066FF',  // Base color of particles
        speedColorFactor: 2,  // How much speed affects color
        maxSpeed: 5,           // Maximum speed for particles
        minSpeed: 0.3          // Minimum speed for particles
    },
    
    // Physics settings
    physics: {
        gravitationalConstant: 1,  // Strength of gravity for particles
        planetGravityConstant: 0.0001, // Strength of gravity between planets
        forcefieldBuffer: 10,        // Buffer zone around planets (px)
        bounceReduction: 0.2,        // Energy lost on bounce (1 = no loss)
        orbitDistance: 5,            // Multiple of planet radius for counting orbits
        repelStrength: 0.5,          // Strength of the repelling force (higher = stronger repulsion)
        planetRepelStrength: 0.3,    // Strength of repelling force between planets
        edgeRepelSmoothing: 0.01,     // Smoothing factor for edge repelling (lower = smoother)
        orbitRadiusFactor: 3,        // Multiplier for orbit radius relative to planet size
        maxPlanetSpeed: 0.3          // Maximum speed for planets
    },
    
    // Audio settings
    audio: {
        minVolume: -40,        // dB
        maxVolume: 0,          // dB
        volumeStep: 1,       // Volume increase per orbiting particle
        smoothingFactor: 0.01   // Smoothing factor for volume changes (0.1 = gradual, 1 = instant)
    },
    
    // Visual effects
    effects: {
        trailOpacity: 0.05,    // Lower = longer trails
        volumeGlowScale: 1.01,  // Scale factor for the white circle based on volume
        maxVolumeOpacity: 0.04,  // Maximum opacity for the white circle based on volume
        volumeGlowColor: '#00f3ff' // Color of the circle that grows/shrinks based on volume
    }
};

// Export the configuration
if (typeof module !== 'undefined') {
    module.exports = CONFIG;
}