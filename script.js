document.getElementById('addText').addEventListener('click', function() {
    const textArea = document.getElementById('textArea');
    const fontSelect = document.getElementById('fontSelect');
    const fontSize = document.getElementById('fontSize');
    const fontColor = document.getElementById('fontColor');

    textArea.style.fontFamily = fontSelect.value;
    textArea.style.fontSize = fontSize.value + 'px';
    textArea.style.color = fontColor.value;
});

document.getElementById('undo').addEventListener('click', function() {
    document.execCommand('undo');
});

document.getElementById('redo').addEventListener('click', function() {
    document.execCommand('redo');
});
