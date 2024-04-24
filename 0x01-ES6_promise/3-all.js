import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const photoResponse = values[0];
      const userResponse = values[1];

      const photo = photoResponse.body;
      const { firstName, lastName } = userResponse;

      console.log(`${photo} ${firstName} ${lastName}`);
    })

    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
