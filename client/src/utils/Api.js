import axios from "axios";

// Export an object containing methods we'll use for accessing Google Books

export default {
  // getRandomBook: function() {
  //   return axios.get("https://play.google.com/store/books/collection/cluster?clp=sgI2Ci4KKHByb21vdGlvbl9ib29rc19xdWFsaXR5X3RpbWVfZnJlZV9lYm9va3MQRBgBIgQIBQgs:S:ANO1ljJINqw&gsr=CjmyAjYKLgoocHJvbW90aW9uX2Jvb2tzX3F1YWxpdHlfdGltZV9mcmVlX2Vib29rcxBEGAEiBAgFCCw%3D:S:ANO1ljI1VZU");
  // },
  getBooks: function(title) {
    return axios.get("https://books.google.com/" + title + "/images");
  },
  saveBook: function() {
    return axios.put
  },
  deleteBook: function(id) {
    return axios.delete("/api/books" + id);
  }, 
  getSavedBooks: function() {
    return axios.get("https://books.google.com/Saved");
  }
};