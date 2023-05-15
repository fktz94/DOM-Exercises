export default function geolocalizacion(id, link) {
  const $lis = document.getElementById(id).children,
    $a = document.getElementById(link),
    success = ({ coords: { latitude, longitude, accuracy } }) => {
      $lis[0].innerHTML = `<b>Latitud: </b> ${latitude}`;
      $lis[1].innerHTML = `<b>Longitud: </b> ${longitude}`;
      $lis[2].innerHTML = `<b>Precisión: </b> ${accuracy} metros`;
      $a.setAttribute(
        'href',
        // `http://maps.google.com/maps?z=12&t=m&q=loc:${latitude}+${longitude}`,
        `https://www.google.com/maps/@${latitude},${longitude}`,
      );
    },
    error = (err) => {
      console.log(err);
    },
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  navigator.geolocation.getCurrentPosition(success, error, options);
}
