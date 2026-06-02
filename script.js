function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const logs = [
    "Windows Defender Scan Completed",
    "CPU Spike Detected",
    "RAM Optimized Successfully",
    "Security Patch Installed",
    "Network Stable",
    "Firewall Active",
    "Disk Cleanup Recommended",
    "Background Service Restarted",
    "System Running Smoothly",
    "No Threats Detected"
];

function updateDashboard(){

    let cpu = randomNumber(20,95);
    let ram = randomNumber(30,90);
    let disk = randomNumber(25,85);

    document.getElementById("cpu")
        .innerText = cpu + "%";

    document.getElementById("ram")
        .innerText = ram + "%";

    document.getElementById("disk")
        .innerText = disk + "%";

    // Progress bars
    document.getElementById("cpu-bar")
        .style.width = cpu + "%";

    document.getElementById("ram-bar")
        .style.width = ram + "%";

    document.getElementById("disk-bar")
        .style.width = disk + "%";

    // Alerts
    let alertMessage =
        "✅ System Running Smoothly";

    if(cpu > 80){
        alertMessage =
        "⚠️ High CPU Usage Detected";
    }

    if(ram > 80){
        alertMessage =
        "⚠️ RAM Usage Critical";
    }

    document.getElementById("alert-message")
        .innerText = alertMessage;

    // Logs
    let randomLog =
        logs[Math.floor(Math.random() * logs.length)];

    let logContainer =
        document.getElementById("logs");

    let newLog =
        document.createElement("div");

    newLog.classList.add("log");

    newLog.innerText =
        "[" + new Date().toLocaleTimeString() + "] "
        + randomLog;

    logContainer.prepend(newLog);

    if(logContainer.children.length > 8){
        logContainer.removeChild(
            logContainer.lastChild
        );
    }
}


setInterval(updateDashboard, 2000);

updateDashboard();

function login(){

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(
        username === "admin"
        &&
        password === "admin123"
    ){
        window.location.href =
        "index.html";
    }

    else{
        document.getElementById(
            "error-message"
        ).innerText =
        "Invalid Username or Password";
    }
}