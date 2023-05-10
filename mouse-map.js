document.addEventListener("mousemove", function(e){
    
   const colorX = Math.round(e.pageX * 255 / window.innerWidth );
   const colorY = Math.round(e.pageY * 255 / window.innerHeight);
   const color = `rgb(${colorX}, ${colorY}, 0)`;
   console.log(color);
   document.body.style.backgroundColor = color;
  });
