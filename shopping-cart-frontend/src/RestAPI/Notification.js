import Swal from "sweetalert2";
class Notification {
  static success = (data) => {
    return Swal.fire({
      title: "Başarılı",
      text: data,
      icon: "success",
      confirmButtonText: "OK",
      // duration: 2000,
      // closeButton: true,
      // position: 'top-right',
    });
  };

  static error = (data) => {
    return Swal.fire({
      title: "Hata",
      text: data,
      icon: "data",
      confirmButtonText: "OK",
      // duration: 2000,
      // closeButton: true,
      // position: 'top-right',
    });
  };
}
export default Notification;
