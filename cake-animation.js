document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playAnimation');
    const cakeContainer = document.getElementById('birthdayCakeContainer');
    
    function resetAnimation() {
        // Reset all animation states
        const tiers = document.querySelectorAll('.tier');
        const candles = document.querySelector('.candles-container');
        const flames = document.querySelectorAll('.candle-flame');
        
        // Reset tiers
        tiers.forEach(tier => {
            tier.style.animation = 'none';
            tier.style.opacity = '0';
            tier.style.transform = 'translateY(50px)';
        });
        
        // Reset candles
        candles.style.animation = 'none';
        candles.style.opacity = '0';
        candles.style.transform = 'translateY(20px)';
        
        // Reset flames
        flames.forEach(flame => {
            flame.style.animation = 'none';
            flame.style.opacity = '0';
            flame.style.transform = 'scale(0)';
        });
        
        // Force reflow
        void cakeContainer.offsetWidth;
    }
    
    function startAnimation() {
        resetAnimation();
        
        // Re-add animations
        const tiers = document.querySelectorAll('.tier');
        const candles = document.querySelector('.candles-container');
        const flames = document.querySelectorAll('.candle-flame');
        
        // Animate tiers
        tiers[2].style.animation = 'appearCake 0.8s 0.5s forwards';
        tiers[1].style.animation = 'appearCake 0.8s 1.3s forwards';
        tiers[0].style.animation = 'appearCake 0.8s 2.1s forwards';
        
        // Animate candles
        candles.style.animation = 'appearCandles 0.8s 3s forwards';
        
        // Animate flames
        flames.forEach((flame, index) => {
            flame.style.animation = `flicker 1.5s infinite alternate, appearFlame 0.5s ${3.5 + (index * 0.2)}s forwards`;
        });
        
        // Show success message
        playButton.textContent = '✨ Birthday Cake Complete!';
        setTimeout(() => {
            playButton.textContent = '🎂 Make Birthday Cake Again';
        }, 2000);
    }
    
    // Start animation automatically after page loads (with delay)
    setTimeout(startAnimation, 1000);
    
    // Add click event to replay animation
    playButton.addEventListener('click', startAnimation);
});