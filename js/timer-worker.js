let time;

onmessage = function(msg){

  let value = msg.data;
  const interval = value[1];

  if(value[0] === "start"){
    console.log("Starting timer...");
    time = setInterval(function(){
      postMessage(true);
    }, interval);

  }

  if(value[0] === "stop"){
    console.log("Stopping timer...");
    clearInterval(time);
  }
};