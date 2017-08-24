'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 410, 260);
  ctx.fillRect(100, 10, 410, 260);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max);
  var barWidth = 40;
  var indent = 50;
  var initialX = 160;
  var initialY = 240;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * 0.9 + 0.1) + ')';
    }

    ctx.fillRect(initialX + indent * i, initialY, barWidth, -(times[i] * step));

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - (times[i] * step) - 10);
  }
};
