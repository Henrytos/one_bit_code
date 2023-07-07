function show() {
 /*HTML Colletion */
  const listElements= document.getElementsByTagName('li')
  console.log(listElements)

  const contactInputs = document.getElementsByClassName("contact-input")
  console.log(contactInputs)
/* NODE LIST */
  
  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)
/*METODO FOR EACH ETC */
  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)
/*ÚNICO ELEMENTO */
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const firstContact = document.querySelector('#contact-list> li > label')
  console.log(firstContact)
}
