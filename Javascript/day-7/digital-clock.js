(function digitalClock() {
  let myDate = new Date();
  //   console.log(myDate);
  //   myDate.setHours(0);
  let hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();

  //   console.log(hours, minutes, seconds);

  let hours12 = hours > 12 ? hours - 12 : hours;
  if (hours === 0) {
    hours12 = "12";
  }

  let time = "";
  time += hours12 < 10 ? `0${hours12}` : `${hours12}`;
  time += minutes < 10 ? `:0${minutes}` : `:${minutes}`;
  time += seconds < 10 ? `:0${seconds}` : `:${seconds}`;
  time += hours > 12 ? " PM" : " AM";
  console.log(time);
})();
