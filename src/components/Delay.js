async function delayForDemo(promise, delayTime) {
    await new Promise((resolve) => {
      setTimeout(resolve, delayTime||0);
    });
    return promise;
  }
  
  export default delayForDemo;