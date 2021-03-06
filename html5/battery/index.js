navigator.getBattery().then((battery) => {
  console.log(battery);
  battery.addEventListener('chargingchange', (e) => {
    console.log('chargingchange' + battery.charging);
  });
  battery.addEventListener('chargingtimechange', () => {
    console.log('chargingtimechange' + battery.chargingTime);
  });
  battery.addEventListener('levelchange', () => {
    console.log('levelchange' + battery.level);
  });
  battery.addEventListener('dischargingtimechange', () => {
    console.log('dischargingtimechange' + battery.dischargingTime);
  });
});