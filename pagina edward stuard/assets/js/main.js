/*
function verifyLogin() {
  const statusLogin = localStorage.getItem("login") === "true";
  
  if (statusLogin) {
    const registroForm = document.getElementById("registroForm");
    const buttonLogin = document.getElementById("buttonLogin");
    const buttonLogout = document.getElementById("buttonLogout");

    if (registroForm) registroForm.style.display = "none";
    if (buttonLogin) buttonLogin.style.display = "none";
    if (buttonLogout) buttonLogout.style.display = "block";
  } else {
    const registroForm = document.getElementById("registroForm");
    const buttonLogin = document.getElementById("buttonLogin");
    const buttonLogout = document.getElementById("buttonLogout");

    if (registroForm) registroForm.style.display = "block";
    if (buttonLogin) buttonLogin.style.display = "block";
    if (buttonLogout) buttonLogout.style.display = "none";
  }
}

async function logoutUser() {
  localStorage.setItem("login", "false");
  setTimeout(() => verifyLogin());
}

async function loginUser(email, password) {
  try {
    const response = await fetch("server/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}`,
    });

    const result = await response.json();
    if (result.success) {
      localStorage.setItem("login", "true");
      document.getElementById("formLogin").reset();
      alert("inicio exitoso de sesion");
      setTimeout(() => verifyLogin());
    } else {
      logoutUser();
      alert("Error al querer iniciar session");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al logearte");
    logoutUser();
  }
}

async function registerUser(name, email, phone, password) {
  try {
    const response = await fetch("server/register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&name=${name}&phone=${phone}&password=${password}`,
    });

    const result = await response.json();
    if (result.success) {
      document.getElementById("formRegister").reset();
      alert("Usuario registrado exitosamente");
    } else {
      alert("Error al registrarse");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al registrarse");
  }
}

const init = () => {
  const formRegister = document.getElementById("formRegister");
  if (formRegister) {
    formRegister.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = document.getElementById("nameUser").value;
      const email = document.getElementById("emailUser").value;
      const phone = document.getElementById("phoneUser").value;
      const password = document.getElementById("passwordUser").value;

      await registerUser(name, email, phone, password);
    });
  }

  const formLogin = document.getElementById("formLogin");
  if (formLogin) {
    document
      .getElementById("formLogin")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("emailUserLogin").value;
        const password = document.getElementById("passwordUserLogin").value;

        await loginUser(name, password);
      });
  }

  const buttonLogout = document.getElementById("buttonLogout");
  if (buttonLogout) {
    document
      .getElementById("buttonLogout")
      .addEventListener("click", async (event) => {
        logoutUser();
      });
  }

  verifyLogin();
};

init();
*/
function verifyLogin() {
  const statusLogin = localStorage.getItem("login") === "true";
  
  if (statusLogin) {
    $("#registroForm").hide();
    $("#buttonLogin").hide();
    $("#buttonLogout").show();
  } else {
    $("#registroForm").show();
    $("#buttonLogin").show();
    $("#buttonLogout").hide();
  }
}

function logoutUser() {
  localStorage.setItem("login", "false");
  setTimeout(() => verifyLogin());
}

function loginUser(email, password) {
  $.ajax({
    url: "server/login.php",
    type: "POST",
    data: { email: email, password: password },
    success: function(result) {
      if (result.success) {
        localStorage.setItem("login", "true");
        $("#formLogin")[0].reset();
        alert("Inicio exitoso de sesión");
        setTimeout(() => verifyLogin());
      } else {
        logoutUser();
        alert("Error al querer iniciar sesión");
      }
    },
    error: function(error) {
      console.error("Error:", error);
      alert("Ocurrió un error al logearte");
      logoutUser();
    }
  });
}

function registerUser(name, email, phone, password) {
  $.ajax({
    url: "server/register.php",
    type: "POST",
    data: { name: name, email: email, phone: phone, password: password },
    success: function(result) {
      if (result.success) {
        $("#formRegister")[0].reset();
        alert("Usuario registrado exitosamente");
      } else {
        alert("Error al registrarse");
      }
    },
    error: function(error) {
      console.error("Error:", error);
      alert("Ocurrió un error al registrarse");
    }
  });
}

const init = () => {
  const formRegister = $("#formRegister");
  if (formRegister.length) {
    formRegister.on("submit", async (event) => {
      event.preventDefault();

      const name = $("#nameUser").val();
      const email = $("#emailUser").val();
      const phone = $("#phoneUser").val();
      const password = $("#passwordUser").val();

      registerUser(name, email, phone, password);
    });
  }

  const formLogin = $("#formLogin");
  if (formLogin.length) {
    formLogin.on("submit", async (event) => {
      event.preventDefault();

      const email = $("#emailUserLogin").val();
      const password = $("#passwordUserLogin").val();

      loginUser(email, password);
    });
  }

  const buttonLogout = $("#buttonLogout");
  if (buttonLogout.length) {
    buttonLogout.on("click", async () => {
      logoutUser();
    });
  }

  verifyLogin();
};

$(document).ready(init);



$('.img').hover(
  function() {
      $(this).animate({ width: '110%', height: '110%' }, 300);
  },
  function() {
      $(this).animate({ width: '100%', height: '100%' }, 300);
  }
);
// permite que giren los h2 y h3
$('h2').on('click', function() {
  $(this).animate({ deg: 360 }, {
      duration: 1000,
      step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
  });
});

$('h3').on('click', function() {
  $(this).animate({ deg: 360 }, {
      duration: 1000,
      step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
  });
});
// cambia color del h2 a rojo
$('h2').hover(
  function() {
      $(this).css('color', 'ff0000'); // Color al pasar el ratón
  },
  function() {
      $(this).css('color', '#000000'); // Color original
  }
);
// cambia color del h3 a azul
$('h3').hover(
  function() {
      $(this).css('color', '#ff0000'); // Color al pasar el ratón
  },
  function() {
      $(this).css('color', '#000000'); // Color original
  }
);
      const imgS23 = document.getElementById('s23-img');
        const imgS22 = document.getElementById('s22-img');
    
        imgS23.addEventListener('mouseover', () => {
            imgS23.style.transform = 'translateX(-100%)';
            imgS22.style.transform = 'translateX(100%)';
        });
    
        imgS23.addEventListener('mouseout', () => {
            imgS23.style.transform = 'translateX(0)';
            imgS22.style.transform = 'translateX(0)';
        });
    
        imgS22.addEventListener('mouseover', () => {
            imgS22.style.transform = 'translateX(-100%)';
            imgS23.style.transform = 'translateX(100%)';
        });
    
        imgS22.addEventListener('mouseout', () => {
            imgS22.style.transform = 'translateX(0)';
            imgS23.style.transform = 'translateX(0)';
        });

        $(document).ready(function() {
          $('h2, .img').hide().fadeIn(1000); // Aparecen en 1000 milisegundos
      });
      
      $(document).ready(function() {
        // Cambiar el color del label al pasar el mouse
        $('label').on('mouseenter', function() {
            $(this).css('color', '#f39c12'); // Cambia a un color amarillento
        }).on('mouseleave', function() {
            $(this).css('color', ''); // Restaura el color original al quitar el mouse del label
        });
    });
    $(document).ready(function() {
      // Función para generar un color aleatorio en formato hexadecimal
      function getRandomColor() {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      }
  
      // Cambiar el color de fondo del formulario al pasar el mouse sobre el h3
      $('h3:contains("SIGN-UP")').on('mouseenter', function() {
          $('form').css('background-color', getRandomColor());
      });
  });


