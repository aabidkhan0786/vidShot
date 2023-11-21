import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../Firebase/firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addVideos } from "../../Redux/Actions/Video";
const AddVideos = () => {

  const [img, setImg] = useState("")
  const [video, setVideo] = useState("")
  const [imgPer, setImgPer] = useState("")
  const [vidPer, setVidPer] = useState("")
  const [tags, setTags] = useState("")
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleInputs = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name;
    const storageRefUrl = storageRef(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRefUrl, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl" ? setImgPer(Math.round(progress)) : setVidPer(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => { },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","))
  }

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video])

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img])

  const addVid = () => {
    if (video == "" || img == "" || inputs == {}) {
      return alert("Please fill up the fields!")
    } else {
      dispatch(addVideos({ ...inputs, tags }))
      navigate("/")
    }
  }

  return (
    <>
      <div className="center_page">
        <div className="profile_cover" >
          <h3 className="text-center my-2">Add Videos:</h3>
          <div className="add_video">
            <div className="left_div flex-column">
              <div className="form-floating" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={handleInputs}
                  name="title"
                />
                <label for="floatingInput">Title</label>
              </div>
              <div className="form-floating mt-4" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="separated with commas"
                  onChange={handleTags}
                  name="tags"
                />
                <label for="floatingInput">Tags (separated with commas)</label>
              </div>
              <div className="text-center mt-1">
                <label
                  className="upload_button"
                  style={{ cursor: "pointer" }}
                  for="thumbnail"
                >
                  Upload Thumbnail
                </label>
                <input id="thumbnail" type="file" accept="image/*"
                  onChange={e => setImg(e.target.files[0])} hidden name="thumbNail" />
                {
                  imgPer > 0 && <>
                    <div className="progress my-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${imgPer}%` }}>{imgPer}%</div>
                    </div>
                  </>
                }
              </div>
            </div>
            <div className="right_div flex-column">
              <div class="form-floating" style={{ width: "100%" }}>
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "148px" }}
                  onChange={handleInputs}
                  name="desc"
                ></textarea>
                <label for="floatingTextarea2">Caption</label>
              </div>
              <div className="text-center">
                <label
                  className="upload_button"
                  style={{ cursor: "pointer" }}
                  for="videos"
                >
                  Upload Video
                </label>
                <input id="videos" type="file" name="videoUrl" accept="video/*" onChange={e => setVideo(e.target.files[0])} hidden />
                {
                  vidPer > 0 && <>
                    <div className="progress my-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${vidPer}%` }}>{vidPer}%</div>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
          <center>
            <button className="basic_btn w-50 mb-3" onClick={addVid}>Upload</button>
          </center>
        </div>
      </div>
    </>
  );
};
export default AddVideos;