  var a1 = document.getElementById("a1");
  var a2 = document.getElementById("a2");
  var a3 = document.getElementById("a3");

  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  var b3 = document.getElementById("b3");

  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var c3 = document.getElementById("c3");
  

  const ini = document.getElementById("im");
  const vacio = '<img id="im" src="empty.jpg">';
  const x = "<img id='im' src='Equis.jpg' name='x'>";
  const o = "<img id='im' src='Circulo.jpg' name='o'>";

  /* Se agrega el evento al elemento */
  a1.addEventListener("click", changeImgA1);
  a2.addEventListener("click", changeImgA2);
  a3.addEventListener("click", changeImgA3);

  b1.addEventListener("click", changeImgB1);
  b2.addEventListener("click", changeImgB2);
  b3.addEventListener("click", changeImgB3);

  c1.addEventListener("click", changeImgC1);
  c2.addEventListener("click", changeImgC2);
  c3.addEventListener("click", changeImgC3);


  var test = document.getElementById("root").value;
  
  var aux1 = 1, aux2 = 1, aux3 = 1, aux4 = 1, aux5 = 1, aux6 = 1, aux7 = 1, aux8 = 1, aux9 = 1;

  var A1 = 'nada', A2 = 'nada', A3 = 'nada', B1, B2, B3, C1, C2, C3;

  function changeImgA1() {
    
    if ( test == 'init' && aux1 == 1) {
        a1.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux1 = 0;
    } else if (test == 'circulo' && aux1 == 1)  {
        a1.innerHTML = o;
        test = 'init';
        aux1 = 0;
    }
    A1 = a1.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  function changeImgA2() {
    
    if ( test == 'init' && aux2 == 1) {
        a2.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux2 = 0;
    } else if (test == 'circulo' && aux2 == 1)  {
        a2.innerHTML = o;
        test = 'init';
        aux2 = 0;
    }
    A2 = a2.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }

  }

  function changeImgA3() {
    
    if ( test == 'init' && aux3 == 1) {
        a3.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux3 = 0;
    } else if (test == 'circulo' && aux3 == 1)  {
        a3.innerHTML = o;
        test = 'init';
        aux3 = 0;
    }
    A3 = a3.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  function changeImgB1() {
    
    if ( test == 'init' && aux4 == 1) {
        b1.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux4 = 0;
    } else if (test == 'circulo' && aux4 == 1)  {
        b1.innerHTML = o;
        test = 'init';
        aux4 = 0;
    }
    B1 = b1.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  function changeImgB2() {
    
    if ( test == 'init' && aux5 == 1) {
        b2.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux5 = 0;
    } else if (test == 'circulo' && aux5 == 1)  {
        b2.innerHTML = o;
        test = 'init';
        aux5 = 0;
    }
    B2 = b2.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  function changeImgB3() {
    
    if ( test == 'init' && aux6 == 1) {
        b3.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux6 = 0;
    } else if (test == 'circulo' && aux6 == 1)  {
        b3.innerHTML = o;
        test = 'init';
        aux6 = 0;
    }
    B3 = b3.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  function changeImgC1() {
    
    if ( test == 'init' && aux7 == 1) {
        c1.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux7 = 0;
    } else if (test == 'circulo' && aux7 == 1)  {
        c1.innerHTML = o;
        test = 'init';
        aux7 = 0;
    }
    C1 = c1.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  function changeImgC2() {
    
    if ( test == 'init' && aux8 == 1) {
        c2.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux8 = 0;
    } else if (test == 'circulo' && aux8 == 1)  {
        c2.innerHTML = o;
        test = 'init';
        aux8 = 0;
    }
    C2 = c2.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  function changeImgC3() {
    
    if ( test == 'init' && aux9 == 1) {
        c3.innerHTML = x;
        test = 'circulo';
        //Deshabilitar función
        aux9 = 0;
    } else if (test == 'circulo' && aux9 == 1)  {
        c3.innerHTML = o;
        test = 'init';
        aux9 = 0;
    }
    C3 = c3.firstChild.name;

    if(A1 == 'x' && A2 =='x' && A3 =='x' || A1 == 'x' && B1 == 'x' && C1 == 'x' || A1 == 'x' && B2 == 'x' && C3 == 'x' || B1 == 'x' && B2 =='x' && B3 =='x' || C1 == 'x' && C2 =='x' && C3 =='x' || A2 == 'x' && B2 == 'x' && C2 == 'x' || A3 == 'x' && B3 == 'x' && C3 == 'x'){
      alert('Ganó la X');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    } 
    if(A1 == 'o' && A2 =='o' && A3 =='o' || A1 == 'o' && B1 == 'o' && C1 == 'o' || A1 == 'o' && B2 == 'o' && C3 == 'o' || B1 == 'o' && B2 =='o' && B3 =='o' || C1 == 'o' && C2 =='o' && C3 =='o' || A2 == 'o' && B2 == 'o' && C2 == 'o' || A3 == 'o' && B3 == 'o' && C3 == 'o') {
      alert('Ganó O');
      aux1 = 0, aux2 = 0, aux3 = 0, aux4 = 0, aux5 = 0, aux6 = 0, aux7 = 0, aux8 = 0, aux9 = 0;
    }
  }

  