function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList.add("modal__overlay--visible");
  emailjs
    .sendForm(
      'service_elm4a6f',
      'template_7sx98wj',
      event.target,
      
      {
        publicKey: 'BQ4GFFrzFJjpqQLIF'
      }
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    }).catch((error) => {
      loading.classList.remove("modal__overlay--visible");
      alert(`Your message couldn't be sent: ${error.text}`);
    });
}