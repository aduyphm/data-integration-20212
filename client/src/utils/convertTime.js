exports.convertTime = (release_time) => {
    let time = new Date(release_time)
    time.setHours(time.getHours() - 7); 
    console.log(time)
    let timestamp = new Date() - time;
    console.log(timestamp)
    let hour = (timestamp - timestamp % 3600000) / 3600000; // 60 * 60 * 1000
    let minute = Math.round((timestamp - hour * 60 * 60 * 1000) / (1000 * 60));
    if (hour === 0) {
        if (minute === 0) return "Vừa xong"
        else return minute + " phút";
    } else if (hour < 24) {
        return hour + " giờ"
    } else if (hour >= 24 && hour < 48) {
        return "Hôm qua"
    } else {
        return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`
    }
}