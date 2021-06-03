onLoad();

    const chat = document.getElementById("chat_help");

    function onLoad() {
      fetch("http://localhost:3000/settings/admin").then((result) =>
        result.json().then((response) => {
          const buttonSupport = document.getElementById("btn_support");
          if (!response.chat) {
            buttonSupport.style.display = "none";
          }
        })
      );
    }

    function openChat() {
      chat.style.display = "block";
    }

    function closeChat() {
      chat.style.display = "none";
    }

    function keyUpTextHelp(event) {
      const charac_remaining = document.getElementById("charac_remaining");
      const length_text = event.target.value.length;
      charac_remaining.innerHTML = Number(250) - Number(length_text);
    }