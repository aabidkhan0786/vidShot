import Users from "../Models/User.js";
import Videos from "../Models/Video.js";
import CryptoJS from "crypto-js"


// get a user
export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
}

// update user
export const updateUser = async (req, res) => {
  if (req.userId === req.params.id) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.CRYPTO
      ).toString();
    }
    try {
      const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(202).json(updatedUser);
    } catch (error) {
      res.status(500).json({ msg: "error" });
    }
  } else {
    res.status(500).json({ msg: "You are not authenticated!" });
  }
};

// subscribe user
export const subsUser = async (req, res) => {
  if (req.userId !== req.params.id) {
    try {
      const user = await Users.findByIdAndUpdate(
        { _id: req.userId },
        { $push: { subscribedUser: req.params.id } },
        { new: true }
      );
      await Users.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $inc: { subscriber: 1 },
        },
        { new: true }
      );
      res.status(202).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error });
    }
  } else {
    res.status(500).json({ msg: "You are not authenticated!" });
  }
};
// unsubscribe user
export const unSubsUser = async (req, res) => {
  if (req.userId !== req.params.id) {
    try {
      const user = await Users.findByIdAndUpdate(
        { _id: req.userId },
        { $pull: { subscribedUser: req.params.id } },
        { new: true }
      );
      await Users.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $inc: { subscriber: -1 },
        }
      );
      res.status(202).json(user);
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  } else {
    res.status(500).json({ msg: "You are not authenticated!" });
  }
};

// like videos
export const likeVideos = async (req, res) => {
  const videoId = req.params.videoid
  try {
    const video = await Videos.findByIdAndUpdate(videoId, {
      $addToSet: { likes: req.userId },
      $pull: { dislikes: req.userId }
    },
      { new: true }
    )
    res.status(202).json(video)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
}
// dislike videos
export const disLikeVideos = async (req, res) => {
  const videoId = req.params.videoid
  try {
    const vid = await Videos.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: req.userId },
      $pull: { likes: req.userId }
    }, { new: true })
    res.status(202).json(vid)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
}