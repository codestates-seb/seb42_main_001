const convertTime = (date: string | undefined | null) => {
  if (date) {
    const createTime = new Date(date).getTime();
    const currentTime = new Date().getTime();
    const timeGap = currentTime - createTime;

    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    if (timeGap < minute) return `now`;
    else if (timeGap < hour)
      return `${Math.floor(timeGap / minute)} minutes ago`;
    else if (timeGap < day) return `${Math.floor(timeGap / hour)} hours ago`;
    else if (timeGap < month) return `${Math.floor(timeGap / day)} days ago`;
    else if (timeGap < year) return `${Math.floor(timeGap / month)} months ago`;
    else return `${Math.floor(timeGap / year)} years ago`;
  }
};

export default convertTime;
