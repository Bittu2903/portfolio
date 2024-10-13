export const initPendulum = (layer1, layer2, traceOpacityCallback) => {
    const ctx1 = layer1.getContext('2d');
    const ctx2 = layer2.getContext('2d');
  
    const width = 500;
    const height = 500;
    layer1.width = layer2.width = width;
    layer1.height = layer2.height = height;
  
    let a1 = Math.PI / 2;
    let a2 = Math.PI / 2;
    let a1_v = 0;
    let a2_v = 0;
    let prevX2, prevY2;
  
    const g = 1;
    const r1 = 120;
    const r2 = 120;
    const m1 = 40;
    const m2 = 20;
  
    const update = () => {
      const a1_a = (-g * (2 * m1 + m2) * Math.sin(a1) +
        -m2 * g * Math.sin(a1 - 2 * a2) +
        -2 * Math.sin(a1 - a2) * m2 * (a2_v ** 2 * r2 + a1_v ** 2 * r1 * Math.cos(a1 - a2))) /
        (r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2)));
  
      const a2_a = (2 * Math.sin(a1 - a2) *
        (a1_v ** 2 * r1 * (m1 + m2) +
          g * (m1 + m2) * Math.cos(a1) +
          a2_v ** 2 * r2 * m2 * Math.cos(a1 - a2))) /
        (r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2)));
  
      const x1 = r1 * Math.sin(a1);
      const y1 = r1 * Math.cos(a1);
      const x2 = x1 + r2 * Math.sin(a2);
      const y2 = y1 + r2 * Math.cos(a2);
  
      if (prevX2 === undefined) {
        prevX2 = x2;
        prevY2 = y2;
      }
  
      a1_v += a1_a;
      a2_v += a2_a;
      a1 += a1_v;
      a2 += a2_v;
  
      ctx2.clearRect(0, 0, width, height);
      ctx2.save();
      ctx2.translate(width / 2, height / 3);
  
      // Draw pendulum 1
      ctx2.beginPath();
      ctx2.moveTo(0, 0);
      ctx2.lineTo(x1, y1);
      ctx2.stroke();
      ctx2.beginPath();
      ctx2.arc(x1, y1, 10, 0, Math.PI * 2);
      ctx2.fill();
  
      // Draw pendulum 2
      ctx2.beginPath();
      ctx2.moveTo(x1, y1);
      ctx2.lineTo(x2, y2);
      ctx2.stroke();
      ctx2.beginPath();
      ctx2.arc(x2, y2, 10, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.restore();
  
      // Draw trace
      ctx1.clearRect(0, 0, width, height);
      ctx1.fillStyle = `rgba(255, 255, 255, ${traceOpacityCallback()})`;
      ctx1.fillRect(0, 0, width, height);
      ctx1.beginPath();
      ctx1.moveTo(prevX2, prevY2);
      ctx1.lineTo(x2, y2);
      ctx1.stroke();
  
      prevX2 = x2;
      prevY2 = y2;
  
      window.requestAnimationFrame(update);
    };
  
    update();
  };
  
  export const setTraceOpacity = (value) => {
    return value;
  };
  