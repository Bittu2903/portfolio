import React, { useEffect, useRef } from 'react';
import './AnimationOne.css';

const AnimationOne = () => {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);

  useEffect(() => {
    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const ctx1 = layer1.getContext("2d");
    const ctx2 = layer2.getContext("2d");

    const width = 500;
    const height = 500;
    layer1.width = layer2.width = width;
    layer1.height = layer2.height = height;

    let prevX2, prevY2;
    let a1 = 0, a2 = 0, a1_v = 0, a2_v = 0;
    const g = 1, r1 = 120, r2 = 120, m1 = 40, m2 = 20;

    const init = () => {
      a1 = Math.PI / 2;
      a2 = Math.PI / 2;
      ctx1.strokeStyle = "#000";
      ctx2.strokeStyle = "#000";
      ctx2.fillStyle = "#000";
    };

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

      ctx2.save();
      ctx2.translate(width / 2, height / 3);
      ctx2.clearRect(-width, -height, 2 * width, 2 * height);

      // Draw first pendulum
      ctx2.beginPath();
      ctx2.lineWidth = 1;
      ctx2.moveTo(0, 0);
      ctx2.lineTo(x1, y1);
      ctx2.stroke();
      ctx2.closePath();
      ctx2.beginPath();
      ctx2.arc(x1, y1, 10, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.closePath();

      // Draw second pendulum
      ctx2.beginPath();
      ctx2.moveTo(x1, y1);
      ctx2.lineTo(x2, y2);
      ctx2.stroke();
      ctx2.closePath();
      ctx2.beginPath();
      ctx2.arc(x2, y2, 10, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.closePath();
      ctx2.restore();

      // Draw trace
      ctx1.save();
      ctx1.translate(width / 2, height / 3);
      ctx1.beginPath();
      ctx1.fillStyle = 'rgba(255, 255, 255, 0.05)'; // Set a fixed trace opacity
      ctx1.fillRect(-width, -height, 2 * width, 2 * height);
      ctx1.closePath();
      ctx1.beginPath();
      ctx1.moveTo(prevX2, prevY2);
      ctx1.lineTo(x2, y2);
      ctx1.stroke();
      ctx1.closePath();
      ctx1.restore();

      prevX2 = x2;
      prevY2 = y2;

      window.requestAnimationFrame(update);
    };

    init();
    update();
  }, []);

  return (
    <div>
      <div id="canvas_wrapper">
        <canvas ref={layer1Ref} id="layer1" className="canvas" />
        <canvas ref={layer2Ref} id="layer2" className="canvas" />
      </div>
    </div>
  );
};

export default AnimationOne;
