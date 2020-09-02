import axios from "axios";

export default {
  // Gets all posts
  getPalette: function() {
    console.log('api get')
    return axios.get("/api/palettes");
  },
  
  // Saves a post to the database
  savePalette: function(data) {
    console.log('api post', data)
    return axios.post("/api/palettes", data);
  }
};


// // Gets the post with the given id
// getPost: function(id) {
//   return axios.get("/api/posts/" + id);
// },
// // Deletes the post with the given id
// deletePost: function(id) {
//   return axios.delete("/api/posts/" + id);
// },