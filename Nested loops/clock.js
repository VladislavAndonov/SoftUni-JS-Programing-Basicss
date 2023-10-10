function clock() {
  for (hours = 0; hours < 24; hours++) {
    for (mins = 0; mins < 60; mins++) {
      console.log(`${hours}:${mins}`);
    }
  }
}
clock();
