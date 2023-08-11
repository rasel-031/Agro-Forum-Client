export const postDateCalculation = (post_time) => {
  const postDate = new Date(post_time); // Replace with your actual post date

  // Get the current time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - postDate;

  // Convert milliseconds to seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if(days > 0){
    return{
        postTime: days + " days ",
    }
  }
  else if(days < 0){
    return{
        postTime: hours + " hours ",
    }
  }
  else{
    return{
        postTime: minutes + " minutes ",
    }
  } 
};
