function confirmar() {
  var res1 = ipt_r1.value;
  var res2 = ipt_r2.value;
  var res3 = ipt_r3.value;
  var res4 = ipt_r4.value;
  var res5 = ipt_r5.value;
  var res6 = ipt_r6.value;
  var res7 = ipt_r7.value;
  var res8 = ipt_r8.value;
  var res9 = ipt_r9.value;
  var res10 = ipt_r10.value;
  var res11 = ipt_r11.value;
  var res12 = ipt_r12.value;
  var res13 = ipt_r13.value;
  var res14 = ipt_r14.value;
  var res15 = ipt_r15.value;
  var res16 = ipt_r16.value;
  var res17 = ipt_r17.value;
  var res18 = ipt_r18.value;
  var res19 = ipt_r19.value;
  var res20 = ipt_r20.value;
  var res21 = ipt_r21.value;
  

  if (res1 == "processador") {
    for (let contador = 1; contador <= 11; contador++) {
      var proc = document.querySelector(`#cpu${contador}`)
      proc.style.display = "block";
    }
  }
  if (res2 == "circuito digital"){
    for (let contador = 1; contador <= 15; contador++) {
      var circ = document.querySelector(`#circuito_digital${contador}`)
      circ.style.display = "block";
    }
  }
  if (res3 == "armazenamento") {
    for (let contador = 1; contador <= 13; contador++) {
      var armaz = document.querySelector(`#armazena${contador}`)
      armaz.style.display = "block";
    }
  }
  if (res4 == 'reformular') {
    for (let contador = 1; contador <= 10; contador++) {
      var ref = document.querySelector(`#refor${contador}`)
      ref.style.display = "block";
    }
  }
  if (res5 == 'volatil' || res5 == 'volátil') {
    for (let contador = 1; contador <= 7; contador++) {
      var circ = document.querySelector(`#volatil${contador}`)
      circ.style.display = "block";
    }
  }
  if (res6 == 'permanente') { 
    for (let contador = 1; contador <= 10; contador++) {
      var perma = document.querySelector(`#permanente${contador}`)
      perma.style.display = "block";
    }
  }
  if (res7 == 'leitura') {
    for (let contador = 1; contador <= 7; contador++) {
      var leitur = document.querySelector(`#leitura${contador}`)
      leitur.style.display = "block";
    }
  }
  if (res8 == 'reescrever') {
    for (let contador = 1; contador <= 10; contador++) {
      var reesc = document.querySelector(`#resscrever${contador}`)
      reesc.style.display = "block";
    }
  }
  if (res9 == 'nao volatil' || res9 == "não volátil") {
    for (let contador = 1; contador <= 10; contador++) {
      var naovol = document.querySelector(`#nao_volatil${contador}`)
      naovol.style.display = "block";
    }
  }
  if (res10 == 'convencional') {
    for (let contador = 1; contador <= 12; contador++) {
      var convenc = document.querySelector(`#convencional${contador}`)
      convenc.style.display = "block";
    }
  }
  if (res11 == 'constante') {
    for (let contador = 1; contador <= 10; contador++) {
      var permane = document.querySelector(`#permanente${contador}`)
      permane.style.display = "block";
    }
  }
  if (res12 == 'armazenar') {
    for (let contador = 1; contador <= 9; contador++) {
      var armazena = document.querySelector(`#armazenar${contador}`)
      armazena.style.display = "block";
    }
  }
  if (res13 == 'auxiliar') {
    for (let contador = 1; contador <= 8; contador++) {
      var auxi = document.querySelector(`#auxiliar${contador}`)
      auxi.style.display = "block";
    }
  }
  if (res14 == 'acesso direto') {
    for (let contador = 1; contador <= 12; contador++) {
      var acess = document.querySelector(`#acesso_direto${contador}`)
      acess.style.display = "block";
    }
  }
  if (res15 == 'intermediador') {
    for (let contador = 1; contador <= 13; contador++) {
      var interm = document.querySelector(`#intermediador${contador}`)
      interm.style.display = "block";
    }
  }
  if (res16 == 'endereço') {
    for (let contador = 1; contador <= 8; contador++) {
      var ende = document.querySelector(`#endereco${contador}`)
      ende.style.display = "block";
    }
  }
  if (res17 == 'transporte') {
    for (let contador = 1; contador <= 9; contador++) {
      var transp = document.querySelector(`#transporte${contador}`)
      transp.style.display = "block";
    }
  }
  if (res18 == 'quatro') {
    for (let contador = 1; contador <= 6; contador++) {
      var quat = document.querySelector(`#quatro${contador}`)
      quat.style.display = "block";
    }
  }
  if (res19 == 'oito') {
    for (let contador = 1; contador <= 4; contador++) {
      var oito = document.querySelector(`#oito${contador}`)
      oito.style.display = "block";
    }
  }
  if (res20 == 'hyper thread') {
    for (let contador = 1; contador <= 11; contador++) {
      var hype = document.querySelector(`#hyper_thread${contador}`)
      hype.style.display = "block";
    }
  }
  if (res21 == 'multi nucleo' || res21 == 'multi núcleo') {
    for (let contador = 1; contador <= 11; contador++) {
      var multin = document.querySelector(`#multi_nucleo${contador}`)
      multin.style.display = "block";
    }
  }
}