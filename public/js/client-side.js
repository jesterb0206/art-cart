const formElem = document.getElementById('uploadForm');
 
formElem.onsubmit = async (e) => {
    e.preventDefault();
   
    const bunny = new FormData(formElem);
    let response = await fetch('/upload', {
      method: 'POST',
      body: new FormData(formElem),
 
    });
 
    let result = await response.json();
console.log(result)
   
  };
 
