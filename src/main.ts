import './style.css';

const curtain = document.getElementById('curtain')!;
const startBtn = document.getElementById('start-btn')!;
const video = document.getElementById('source-video') as HTMLVideoElement;
const canvas = document.getElementById('ascii-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true })!;

// Resolution of the ASCII grid
const ASCII_WIDTH = 200;
let ASCII_HEIGHT = 80; 
const FONT_SIZE = 12;

function init() {
  resize();
  window.addEventListener('resize', resize);
  
  startBtn.addEventListener('click', startShow);
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const aspect = window.innerHeight / window.innerWidth;
  // Adjust height density based on font aspect ratio (~0.5)
  ASCII_HEIGHT = Math.floor(ASCII_WIDTH * aspect * 0.5);
  
  offscreenCanvas.width = ASCII_WIDTH;
  offscreenCanvas.height = ASCII_HEIGHT;
}

function startShow() {
  curtain.classList.add('open');
  
  video.volume = 0.8;
  video.play().then(() => {
    requestAnimationFrame(render);
  }).catch(err => {
    console.error("Video play failed:", err);
    alert("Falha ao reproduzir o vídeo. Verifique se o arquivo video.webm foi baixado corretamente.");
  });
}

function getCharForBrightness(brightness: number, x: number, y: number): string {
  const d5 = ['@', '#', 'W', 'M', '8', '&', '%'];
  const d4 = ['0', 'O', 'Q', 'G', 'D', 'B', 'R', 'S'];
  const d3 = ['a', 'c', 'e', 'x', 'z', '1', '7', 'o'];
  const d2 = ['+', '=', '*', '~', '^', 'v', '>'];
  const d1 = ['.', '-', '`', ',', '\''];
  
  // Use a slow-changing seed so characters don't flicker 60 times a second
  // Change characters roughly every 150ms
  const time = Math.floor(Date.now() / 150); 
  const seed = time + x * 37 + y * 13;
  
  const rand = (arr: string[]) => arr[seed % arr.length];
  
  if (brightness > 210) return rand(d5);
  if (brightness > 160) return rand(d4);
  if (brightness > 110) return rand(d3);
  if (brightness > 60) return rand(d2);
  if (brightness > 20) return rand(d1);
  return ' ';
}

function render() {
  if (!video.paused && !video.ended) {
    // Draw video to offscreen canvas
    offscreenCtx.drawImage(video, 0, 0, ASCII_WIDTH, ASCII_HEIGHT);
    
    const imgData = offscreenCtx.getImageData(0, 0, ASCII_WIDTH, ASCII_HEIGHT);
    const data = imgData.data;

    // Clear main canvas
    ctx.fillStyle = '#050000'; // Dark red-tinted black background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Setup font
    ctx.font = `bold ${FONT_SIZE}px "Courier New", monospace`;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    
    const cellWidth = canvas.width / ASCII_WIDTH;
    const cellHeight = canvas.height / ASCII_HEIGHT;

    for (let y = 0; y < ASCII_HEIGHT; y++) {
      for (let x = 0; x < ASCII_WIDTH; x++) {
        const i = (y * ASCII_WIDTH + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
        
        if (brightness > 15) {
          const char = getCharForBrightness(brightness, x, y);
          
          if (char !== ' ') {
            // Apply the Red/White color theme.
            // Bright pixels become glowing white. Midtones become neon red.
            if (brightness > 180) {
              ctx.fillStyle = `rgb(${r}, ${g}, ${b})`; 
            } else {
              // Push the colors heavily towards Crimson Red
              const redTint = Math.min(255, r + 50);
              const greenTint = g * 0.3;
              const blueTint = b * 0.3;
              ctx.fillStyle = `rgb(${redTint}, ${greenTint}, ${blueTint})`;
            }

            // Draw character
            ctx.fillText(char, x * cellWidth + cellWidth/2, y * cellHeight);
          }
        }
      }
    }
  }

  requestAnimationFrame(render);
}

init();
