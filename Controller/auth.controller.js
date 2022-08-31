async function getCurrentUser(req,res){
    try {
      const user = await User.findById(req.user._id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  }
   module.exports = {
    signup,
    login,
    getCurrentUser,
  }