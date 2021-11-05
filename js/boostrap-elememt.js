var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Felicitaciones, tu compra es exitosa!', 'success')
  })
}
/* Activar popover */
window.addEventListener("load", function(){
    /* Tooltip */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
     })
    /* Popover (Requiere Tooltip) */
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
     })
     /* Toast */
     var toastTrigger = document.getElementById('liveToastBtn')
     var toastLiveExample = document.getElementById('liveToast')
         if (toastTrigger) {
         toastTrigger.addEventListener('click', function () {
     var toast = new bootstrap.Toast(toastLiveExample)

         toast.show()
  })
}
})