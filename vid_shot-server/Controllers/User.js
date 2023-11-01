import Users from "../Models/User.js";
import Videos from "../Models/Video.js";

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
  if (req.userId === req.params.id) {
    try {
      await Users.findById(
        { _id: req.userId },
        { $push: { subscribedUser: req.params.id } }
      );
      await Users.findById(
        { _id: req.params.id },
        {
          $inc: { subscriber: 1 },
        }
      );
      res.status(204).json("User Subscribed!");
    } catch (error) {
      res.status(500).json({ msg: "error" });
    }
  } else {
    res.status(500).json({ msg: "You are not authenticated!" });
  }
};
// unsubscribe user
export const unSubsUser = async (req, res) => {
  if (req.userId === req.params.id) {
    try {
      await Users.findById(
        { _id: req.userId },
        { $pull: { subscribedUser: req.params.id } }
      );
      await Users.findById(
        { _id: req.params.id },
        {
          $inc: { subscriber: -1 },
        }
      );
      res.status(204).json("User unsubscribed!");
    } catch (error) {
      res.status(500).json({ msg: "error" });
    }
  } else {
    res.status(500).json({ msg: "You are not authenticated!" });
  }
};

// like videos
export const likeVideos = async (req,res)=>{
    const videoId = req.params.videoId
    try {
        await Videos.findByIdAndUpdate(videoId,{
            $addToSet:{likes:req.userId},
            $pull:{dislikes:req.userId}
        })
        res.status(202).json("Video has been liked!")
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}

// dislike videos
export const disLikeVideos = async (req,res)=>{
    const videoId = req.params.videoId
    try {
        await Videos.findByIdAndUpdate(videoId,{
            $addToSet:{dislikes:req.userId},
            $pull:{likes:req.userId}
        })
        res.status(202).json("Video has been disliked!")
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}