import React from "react";

const AddVideos = () => {
  return (
    <>
      <div className="add_video">
        <div className="left_div flex-column">
          <div className="form-floating" style={{ width: "100%" }}>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Title</label>
          </div>
          <div className="form-floating mt-4" style={{ width: "100%" }}>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Tags</label>
          </div>
          <div className="text-center mt-1">
            <label
              className="upload_button"
              style={{ cursor: "pointer" }}
              for="thumbnail"
            >
              Upload Thumbnail
            </label>
            <input id="thumbnail" type="file" accept="image/*" hidden />
          </div>
        </div>
        <div className="right_div flex-column">
          <div class="form-floating" style={{ width: "100%" }}>
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "148px" }}
            ></textarea>
            <label for="floatingTextarea2">Caption</label>
          </div>
          <div className="text-center">
            <label
              className="upload_button"
              style={{ cursor: "pointer" }}
              for="thumbnail"
            >
              Upload Video
            </label>
            <input id="thumbnail" type="file" accept="video/*" hidden />
          </div>
        </div>
      </div>
      <center>
        <button className="basic_btn w-50">Upload</button>
      </center>
    </>
  );
};

export default AddVideos;
