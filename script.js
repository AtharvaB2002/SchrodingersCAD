// Pauli-X Gate
function applyXGate() {
    var qubit = document.getElementById("qubitx").value;
    var result = document.getElementById("resultx");
    
    if (qubit == "0") {
      result.innerHTML = "1";
    } else if (qubit == "1") {
      result.innerHTML = "0";
    } else {
      result.innerHTML = "Invalid input.";
    }
  }
  
  // Pauli-Y Gate
  function applyYGate() {
    var qubit = document.getElementById("qubity").value;
    var result = document.getElementById("resulty");
    
    if (qubit == "0") {
      result.innerHTML = "i";
    } else if (qubit == "1") {
      result.innerHTML = "-i";
    } else {
      result.innerHTML = "Invalid input.";
    }
  }
  
  // Pauli-Z Gate
  function applyZGate() {
    var qubit = document.getElementById("qubitz").value;
    var result = document.getElementById("resultz");
    
    if (qubit == "0") {
      result.innerHTML = "0";
    } else if (qubit == "1") {
      result.innerHTML = "1";
    } else {
      result.innerHTML = "Invalid input.";
    }
  }

  // Hadamard Gate
function applyHadamardGate() {
    var qubit = document.getElementById("qubitH").value;
    var result = document.getElementById("resultH");
  
    if (qubit == "0") {
      result.innerHTML = "(1/√2) |0⟩ + (1/√2) |1⟩";
    } else if (qubit == "1") {
      result.innerHTML = "(1/√2) |0⟩ - (1/√2) |1⟩";
    } else {
      result.innerHTML = "Invalid input.";
    }
  }
  