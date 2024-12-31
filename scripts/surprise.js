document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("surprise-value");
    const revealButton = document.querySelector(".surprise-button");
    const titleElement = document.querySelector(".surprise-title");
    const pictureElement = document.querySelector(".surprise-picture");
    const descriptionElement = document.querySelector(".surprise-description");
  
    // Cargar el JSON
    const fetchData = async () => {
      try {
        const response = await fetch("./database.json");
        if (!response.ok) {
          throw new Error("Error al cargar la base de datos.");
        }
        const data = await response.json();
        return data.memories;
      } catch (error) {
        console.error(error.message);
        return [];
      }
    };
  
    // Manejar el evento del botón
    revealButton.addEventListener("click", async () => {
      const inputValue = inputField.value.trim();
      if (!inputValue) {
        alert("Por favor, introduce un valor.");
        return;
      }
  
      const memories = await fetchData();
      const memory = memories.find((item) => item.name === inputValue);
  
      if (memory) {
        // Actualizar contenido
        titleElement.textContent = memory.name;
        pictureElement.innerHTML = `<img src="${memory.imagePath}" alt="${memory.name}" style="max-width:100%; max-height:100%;" />`;
        descriptionElement.textContent = memory.description;
      } else {
        alert("No se encontró ninguna coincidencia.");
      }
    });
  });
  