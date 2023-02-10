const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api/thoughts/:thoughtId/reactions
router.route('/:userId/reactions').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/reactions/:friendId').delete(removeFriend);

module.exports = router;
