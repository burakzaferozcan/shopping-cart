class AppUrl {
  static baseURL = "http://localhost:8000";
  static apiURL = "http://localhost:8000/api";

  static home = this.apiURL + "/home";
  static payment = this.apiURL + "/payment";
}

export default AppUrl;
