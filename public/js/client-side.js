const formElem = document.getElementById('uploadForm');

formElem.onsubmit = async (e) => {
    e.preventDefault();
     console.log("iNSIDE FORM COLLECTOR", formElem);
    let response = await fetch('/upload', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };