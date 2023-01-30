export  const dateFormatter = () => {
  let nowDate = new Date().toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" }).split(' ');
  const formattedNowDate = `${nowDate[2]} ${nowDate[1]} ${new Date().getFullYear()}`;
  return {
    day: nowDate[0],
    date: formattedNowDate
  };
};