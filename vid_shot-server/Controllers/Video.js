import Users from "../Models/User.js";
import Videos from "../Models/Video.js";


// get a user
export const getVideo = async (req, res) => {
  try {
    const video = await Videos.find({ userId: req.params.id })
    res.status(200).json(video)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
}

// add video
export const addVideo = async (req, res) => {
  try {
    const video = await new Videos({ userId: req.userId, ...req.body });
    const savedVideo = await video.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    console.log({ msg: error });
    res.status(500).json({ msg: error });
  }
};

// update video
export const updateVideo = async (req, res) => {
  const video = await Videos.findById({ _id: req.params.id });
  try {
    if (!video) {
      return res.status(404).json({ msg: "Video not found!" });
    }
    if (req.userId === video.userId) {
      const updatedVideo = await Videos.findByIdAndUpdate(
        { _id: video._id },
        { $set: req.body },
        { new: true }
      );
      res.status(202).json(updatedVideo);
    } else {
      res.status(403).json({ msg: "You are not allowed!" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// delete video
export const deleteVideo = async (req, res) => {
  const video = await Videos.findById({ _id: req.params.id });
  try {
    if (!video) {
      return res.status(404).json({ msg: "Video not found!" });
    }
    if (req.userId === video.userId) {
      await Videos.findByIdAndDelete({ _id: video._id })
      res.status(204).json("Video deleted");
    } else {
      res.status(403).json({ msg: "You are not allowed!" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// views
export const viewVideo = async (req, res) => {
  try {
    await Videos.findByIdAndUpdate(req.params.id, {
      $inc: { view: 1 }
    })
    req.status(204).json("video viewed")
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

// random videos
export const randomVideo = async (req, res) => {
  try {
    const videos = await Videos.aggregate([{ $sample: { size: 30 } }])
    res.status(200).json(videos)
  } catch (error) {
    console.log({ msg: error });
    res.status(500).json({ msg: error });
  }
}

// trending videos
export const trendVideo = async (req, res) => {
  try {
    const videos = await Videos.find().sort({ views: -1 })
    res.status(200).json(videos)
  } catch (error) {
    console.log({ msg: error });
    res.status(500).json({ msg: error });
  }
}

// user subscribed videos
export const subsVideos = async (req, res) => {
  try {
    const user = await Users.findById(req.userId)
    const subscribedChannels = user.subscribedUser;
    if (subscribedChannels.length == 0) {
      res.status(200).json([])
    } else {
      const list = await Promise.all(
        subscribedChannels.map(channelId => {
          return Videos.find({ userId: channelId })
        })
      )
      res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
    }
  } catch (error) {
    console.log({ msg: error });
    res.status(500).json({ msg: error });
  }
}

// search videos by tags
export const getByTags = async (req, res) => {
  const tags = req.query.tags.split(",")
  try {
    const videos = await Videos.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
}

// search a video
export const getBySearch = async (req, res) => {
  const search = req.query.q
  try {
    const videos = await Videos.find({ title: { $regex: search, $options: "i" } }).limit(30)
    res.status(200).json(videos)
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}