function clean() {
    const inputs = document.querySelectorAll(".inputText");
    inputs.forEach((input) => (input.value = ""));
}


// O tambien se puede resolver asi 

/*
document.querySelectorAll('.inputText').forEach((input) => {
  input.value = null;
}) */



