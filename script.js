    let canvas = document.getElementById('art');
    let context = canvas.getContext('2d');
    fitToContainer(canvas);

    function fitToContainer(canvas){
        // Make it visually fill the positioned parent
        canvas.style.width ='100%';
        canvas.style.height='100%';
        // ...then set the internal size to match
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }

    context.lineWidth = 4;
    context.strokeStyle = "#c1c7c9"
    context.beginPath();
  

    const width = 50;
    const height = 50;
    const gap = 25;
    let x, y;
    
    for (let i = 0; i < 25; i++){
      for (let j = 0; j < 5; j++){
        x = 10 + (width + gap) * i;
        y = 10 + (width + gap) * j;
        context.beginPath();
        context.rect(x, y , width, height );
        context.stroke();
        
        if (Math.random() > 0.5){
        context.beginPath();
        context.rect(x + 4, y + 4, width - 8, height - 8)
        context.stroke();
     
      }
      }
    }